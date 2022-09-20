var express = require('express');
const {sessionsHandler} = require('../controllers/api/sessions.js');




var config = {};
var router = express.Router();

router.post('/', sessionsHandler);




exports.router = router;
