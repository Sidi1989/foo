var express = require('express');
const {apiSignInHandler} = require('../controllers/api/sessions.js');




var config = {};
var router = express.Router();

router.post('/', apiSignInHandler);




exports.router = router;
