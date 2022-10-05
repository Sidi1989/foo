var express = require('express');
const {
  createCollectionHandler,
  retrieveCollectionHandler,
  editCollectionHandler,
  deleteCollectionHandler
} = require('../controllers/api/collections.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las llamadas (relacionadas con "collections") a que obliga la app en cada caso,
  * según la ruta y el modo en que tienen lugar.
  */
var config = {};
var router = express.Router();

router.post('/', createCollectionHandler);
router.get('/:collection', retrieveCollectionHandler);
router.put('/:collection', editCollectionHandler);
router.delete('/:collection', deleteCollectionHandler);




exports.router = router;
