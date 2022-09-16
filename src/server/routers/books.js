var express = require('express');
const {
  apiCreateBookHandler,
  apiRetrieveBookHandler,
  apiEditBookHandler,
  apiDeleteBookHandler
} = require('../controllers/api/books.js');




var config = {};
var router = express.Router();

router.post('/', apiCreateBookHandler);
router.get('/:book', apiRetrieveBookHandler);
router.put('/:book', apiEditBookHandler);
router.delete('/:book', apiDeleteBookHandler);




exports.router = router;
