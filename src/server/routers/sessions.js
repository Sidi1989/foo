var express = require('express');
const {createSessionHandler, deleteSessionHandler} = require('../controllers/api/sessions.js');




var config = {};
var router = express.Router();

router.post('/', createSessionHandler);
router.delete('/', deleteSessionHandler);




exports.router = router;
