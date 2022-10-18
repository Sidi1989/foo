var express = require('express');
const {
  createLocationHandler,
  retrieveLocationHandler,
  editLocationHandler,
  deleteLocationHandler
} = require('../controllers/api/locations.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las llamadas (relacionadas con "locations") a que obliga la app en cada caso,
  * según la ruta y el modo en que tienen lugar.
  */
var config = {};
var router = express.Router();

router.post('/', createLocationHandler);
router.get('/:location', retrieveLocationHandler);
router.put('/:location', editLocationHandler);
router.delete('/:location', deleteLocationHandler);




exports.router = router;
