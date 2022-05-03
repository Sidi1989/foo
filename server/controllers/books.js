const {getBookById} = require('../models/books.js');
const {getCategoryById} = require('../models/categories.js');
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
    info.bookLocation = {};
  } else {
    info.bookLocation = bookLocation;
  };

  var userInfo = getUserById(book.reviews.userId);
  if (book.reviews.userId == null) {
    info.userInfo = {};
  } else {
    info.userInfo = userInfo;
  };

  res.render(pathname, info);
};




exports.bookformHandler = bookformHandler;
exports.booksearchHandler = booksearchHandler;
exports.bookprofileHandler = bookprofileHandler;
