'use strict';
var fs = require('fs');
var path = require('path');

exports.getAll = (req,res) => {

	try {
		if (fs.existsSync(path.resolve('dummy-data/profiles.json'))) {

			var profiles = JSON.parse(fs.readFileSync(path.resolve('dummy-data/profiles.json'), 'utf8'));

			if(typeof req.params.start == "undefined") res.status(200).send({code:200, data: profiles});

			var counter = 0;
			var start = req.params.start;
			var end = typeof req.params.end == "undefined" ? 6 : req.params.end;
			var stop = 0;

			var loadProfiles = {};

			for (var i in profiles) {
				if(counter >= start && stop < end) {
					loadProfiles[i] = profiles[i];
					stop++;
				}
				counter++;
			}

			res.status(200).send({code: 200, data: loadProfiles});
		} else {
			res.status(500).send({code: 500, error_message: 'There was an error when trying to open the file'});
		}
	}
	catch (e) {
	   res.status(502).send(e);
	}
}


exports.delete = (req,res) => {

	try {
		if (fs.existsSync(path.resolve('dummy-data/profiles.json'))) {
			var profiles = JSON.parse(fs.readFileSync(path.resolve('dummy-data/profiles.json'), 'utf8'));

			var removedProfile = profiles['profile_'+req.params.id];
			
			if(typeof removedProfile == 'undefined'){
				res.status(500).send({code: 500, message: 'This profile does not exist'});
			}

			delete profiles['profile_'+req.params.id];

			fs.writeFile(path.resolve('dummy-data/profiles.json'), JSON.stringify(profiles), (err) => {
			  if (err) throw err;
			});

			res.status(200).send({code: 200, succes_message: 'The profile '+req.params.id+' was removed', removed_profile_data:removedProfile});

		} else {
			res.status(500).send({code: 500, error_message: 'There was an error when trying to open the file'});
		}
	}
	catch (e) {
	   res.status(500).send(e);
	}
}