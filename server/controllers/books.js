const {getBookById, getAllBooks} = require('../models/books.js');
const {getAllCategories, getCategoryById} = require('../models/categories.js');
const {getAllSubcategories, getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getLocationById} = require('../models/locations.js');
const {getAuthorById} = require('../models/authors.js');
const {getReviewById} = require('../models/reviews.js');
const {getUserById} = require('../models/users.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/bookform.html`;

  var info = {};
  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Búsqueda de un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var booksearchHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/booksearch.html`;
  var info = {};

  var books = getAllBooks();

  books.forEach(function (e,i) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e,i) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e,i) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e,i) {
    e.language = getLanguageById(e.language);
  });

  info.books = books;

  return res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Información sobre un libro concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookprofileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/bookprofile.html`;

  var book = getBookById(req.params.book);

  var info = {};
  if (book == null) {
    info.book = {};
  } else {
    info.book = book;
  };

  var location = getLocationById(book.location);
  if (book.location == null) {
    info.book.location = {};
  } else {
    info.book.location = location;
  };

  var author = getAuthorById(book.author);
  if (book.author == null) {
    info.book.author = {};
  } else {
    info.book.author = author;
  };

  res.render(pathname, info);
};


var reviews = book.reviews.map(function (id) {
  var review = getReviewById(id);
  return review;
});

info.reviews = reviews;

var reviewer = getUserById(review.reviewer);
if (review.reviewer == null) {
  info.review.reviewer = {};
} else {
  info.review.reviewer = reviewer;
};




exports.bookformHandler = bookformHandler;
exports.booksearchHandler = booksearchHandler;
exports.bookprofileHandler = bookprofileHandler;
