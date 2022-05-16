const {getUserById} = require('../models/users.js');
const {getBookById} = require('../models/books.js')
const {getCollectionById} = require('../models/collections.js');




/**
 * @description
 * Función destinada a cubrir la petición de Mostrar la Configuración de una Colección concreta
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var collectionprofileHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/collectionprofile.html`;

  var info = {};

  var user = getUserById(req.params.user);
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var collection = getCollectionById(req.params.collection);
  if (collection == null) {
    info.collection = {};
  } else {
    info.collection = collection;
  };


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Registrar una nueva colección para el usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var collectionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/collectionform.html`;

  var info = {};

  var user = getUserById(req.params.user);
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var collectionsMapped = user.collections.map(function (collectionId) {
    var collection = getCollectionById(collectionId);
    var booksInCollection = collection.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    collection.books = booksInCollection;
    return collection;
  });
  info.collections = collectionsMapped;


  res.render(pathname, info);
};




exports.collectionprofileHandler = collectionprofileHandler;
exports.collectionformHandler = collectionformHandler;
