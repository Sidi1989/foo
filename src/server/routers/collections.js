var express = require('express');
const {
  createCollectionHandler,
  retrieveCollectionHandler,
  editCollectionHandler,
  deleteCollectionHandler
} = require('../controllers/api/collections.js');




var config = {};
var router = express.Router();

router.post('/', createCollectionHandler);
router.get('/:collection', retrieveCollectionHandler);
router.put('/:collection', editCollectionHandler);
router.delete('/:collection', deleteCollectionHandler);




exports.router = router;
