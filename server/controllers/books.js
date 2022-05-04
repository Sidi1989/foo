const {getBookById} = require('../models/books.js');
const {getAllCategories} = require('../models/categories.js');
const {getAllSubcategories} = require('../models/subcategories.js');
const {getAuthorById} = require('../models/authors.js');
const {getReviewById} = require('../models/reviews.js');
const {getLocationById} = require('../models/locations.js');
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
  var bookCategories = getAllCategories();
  info.bookCategories = bookCategories;

  var bookSubcategories = getAllSubcategories();
  info.bookSubcategories = bookSubcategories;

  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Búsqueda de un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var booksearchHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/booksearch.html`;
  var info = {};

  res.render(pathname, info);
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

  var bookLocation = getLocationById(book.location);
  if (book.location == null) {
    info.book.location = {};
  } else {
    info.book.location = bookLocation;
  };

  var bookAuthor = getAuthorById(book.author);
  if (book.author == null) {
    info.book.author = {};
  } else {
    info.book.author = bookAuthor;
  };

/*  book.reviews.forEach(function (e,i) {
    e.user = getUserById(e.userId);
  });
*/
  res.render(pathname, info);
};




exports.bookformHandler = bookformHandler;
exports.booksearchHandler = booksearchHandler;
exports.bookprofileHandler = bookprofileHandler;
