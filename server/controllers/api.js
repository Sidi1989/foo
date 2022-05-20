const {getAllBooks} = require('../models/books.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');



var apiBooksHandler = function (req, res) {
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




exports.apiBooksHandler = apiBooksHandler;
