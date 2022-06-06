/*
const {getAllBooks, getBookById} = require('../models/books.js');
const {getAllMembers, getMemberById} = require('../models/members.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getAllCollections, getCollectionById} = require('../models/collections.js');
const {getAllPetitions, getPetitionById} = require('../models/petitions.js');
const {getAllReviews, getReviewById} = require('../models/reviews.js');




var apiCreateBookHandler = function (req, res) {
  var bookId = new Date();
  var info = {
    status: "OK",
    book: bookId
  };
  return res.json(info);
};


var apiListBooksHandler = function (req, res) {
  var books = getAllBooks();

  books.forEach(function (e) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e) {
    e.language = getLanguageById(e.language);
  });
  books.forEach(function (e) {
    e.collection = getCollectionById(e.collection);
  });

  return res.json(books);
};


var apiRetrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


var apiEditBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


var apiDeleteBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};




exports.apiCreateBookHandler = apiCreateBookHandler;
exports.apiListBooksHandler = apiListBooksHandler;
exports.apiRetrieveBookHandler = apiRetrieveBookHandler;
exports.apiEditBookHandler = apiEditBookHandler;
exports.apiDeleteBookHandler = apiDeleteBookHandler;
*/
