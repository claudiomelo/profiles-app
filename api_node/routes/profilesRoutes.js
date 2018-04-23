var express = require('express');
var router = express.Router();

const profilesController = require('../Controllers/ProfilesController');

router.get('/getAll/:start?/:end?', profilesController.getAll);
router.delete('/delete/:id', profilesController.delete);

module.exports = router;