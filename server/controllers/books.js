const books = require('../../runtime/db/books.json');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/bookform.html`;
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
  var pathname = `${__dirname}/../../Pinakes/html/booksearch.html`;
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
  var pathname = `${__dirname}/../../Pinakes/html/bookprofile.html`;

  var filteredBooks = books.filter(function (e) {
    return (req.params.book == e.id)
  });

  var info = {};
  if (filteredBooks.length == 0) {
    info.book = {};
  } else {
    info.book = filteredBooks[0];
  };

  res.render(pathname, info);
};




exports.bookformHandler = bookformHandler;
exports.booksearchHandler = booksearchHandler;
exports.bookprofileHandler = bookprofileHandler;
