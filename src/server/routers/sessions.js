var express = require('express');
const {createSessionHandler, deleteSessionHandler} = require('../controllers/api/sessions.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las llamadas (relacionadas con "sessions") a que obliga la app en cada caso,
  * según la ruta y el modo en que tienen lugar.
  */
var config = {};
var router = express.Router();

router.post('/', createSessionHandler);
router.delete('/', deleteSessionHandler);




exports.router = router;
