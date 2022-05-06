const {getAllBooks} = require('../models/books.js');




var apiBooksHandler = function (req, res) {
  var books = getAllBooks();
  res.json(books);
};




exports.apiBooksHandler = apiBooksHandler;
