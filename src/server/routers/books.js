var express = require('express');
const {
  listBooksHandler,
  createBookHandler,
  retrieveBookHandler,
  editBookHandler,
  deleteBookHandler
} = require('../controllers/api/books.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las llamadas (relacionadas con "books") a que obliga la app en cada caso,
  * según la ruta y el modo en que tienen lugar.
  */
var config = {};
var router = express.Router();

router.get('/', listBooksHandler);
router.post('/', createBookHandler);
router.get('/:book', retrieveBookHandler);
router.put('/:book', editBookHandler);
router.delete('/:book', deleteBookHandler);




exports.router = router;
