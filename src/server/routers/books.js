var express = require('express');
const {
  listBooksHandler,
  createBookHandler,
  retrieveBookHandler,
  editBookHandler,
  deleteBookHandler
} = require('../controllers/api/books.js');




var config = {};
var router = express.Router();

router.get('/', listBooksHandler);
router.post('/', createBookHandler);
router.get('/:book', retrieveBookHandler);
router.put('/:book', editBookHandler);
router.delete('/:book', deleteBookHandler);




exports.router = router;
