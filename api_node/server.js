const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 3000;

var profiles = require('./routes/profilesRoutes');

app.use('/profiles', profiles);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});