const {getAllBooks, getBookById} = require('../models/books.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getAllCollections} = require('../models/collections.js');




var apiCreateBookHandler = function (req, res) {
  console.log(req.body);
  return res.json({});
};


var apiListBooksHandler = function (req, res) {
  var books = getAllBooks();

  books.forEach(function (e,i) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e,i) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e,i) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e,i) {
    e.language = getLanguageById(e.language);
  });

  return res.json(books);
};


var apiRetrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


var apiListCollectionsHandler = function (req, res) {
  var collections = getAllCollections();

  return res.json(collections);
};




exports.apiCreateBookHandler = apiCreateBookHandler;
exports.apiListBooksHandler = apiListBooksHandler;
exports.apiRetrieveBookHandler = apiRetrieveBookHandler;
exports.apiListCollectionsHandler = apiListCollectionsHandler;
