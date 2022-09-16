var express = require('express');
const {
  apiCreateCollectionHandler,
  apiRetrieveCollectionHandler,
  apiEditCollectionHandler,
  apiDeleteCollectionHandler
} = require('../controllers/api/collections.js');




var config = {};
var router = express.Router();

router.post('/', apiCreateCollectionHandler);
router.get('/:collection', apiRetrieveCollectionHandler);
router.put('/:collection', apiEditCollectionHandler);
router.delete('/:collection', apiDeleteCollectionHandler);




exports.router = router;
