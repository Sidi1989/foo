const {getMemberById} = require('../../models/members.js');
const {getCollectionById} = require('../../models/collections.js');
const {getBookById} = require('../../models/books.js')




/**
 * @description
 * función destinada a cubrir la petición de mostrar las Características de una Colección concreta
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */

var collectionEditHandler= function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/collection-edit.ejs`;
  var info = {};

  var member = getMemberById(req.params.member);
  if (member == null) {
    info.member = {};
  } else {
    info.member = member;
  }

  var collectionsMapped = member.collections.map(function (collectionId) {
    var collection = getCollectionById(collectionId);
    var booksInEachCollection = collection.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    collection.books = booksInEachCollection;
    return collection;
  });
  info.member.collections = collectionsMapped;

  var collection = getCollectionById(req.params.collection);
  if (collection == null) {
    info.collection = {};
  } else {
    info.collection = collection;
  }

  var booksInCollection = collection.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });
  info.collection.books = booksInCollection;


  res.render(pathname, info);
};




exports.collectionEditHandler = collectionEditHandler;
