const {getMemberById} = require('../models/members.js');
const {getBookById} = require('../models/books.js')
const {getCollectionById} = require('../models/collections.js');




/**
 * @description
 * Función destinada a cubrir la petición de Mostrar la Configuración de una Colección concreta
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var collectionEditHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/collection-edit.html`;

  var info = {};

  var member = getMemberById(req.params.member);
  if (member == null) {
    info.member = {};
  } else {
    info.member = member;
  };

  var collectionsMapped = member.collections.map(function (collectionId) {
    var collection = getCollectionById(collectionId);
    var booksInCollection = collection.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    return collection;
  });
  info.member.collections = collectionsMapped;

  var collection = getCollectionById(req.params.collection);
  if (collection == null) {
    info.collection = {};
  } else {
    info.collection = collection;
  };

  var booksInCollection = collection.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });
  collection.books = booksInCollection;


  res.render(pathname, info);
};




exports.collectionEditHandler = collectionEditHandler;
