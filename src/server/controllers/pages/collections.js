const {getMemberById} = require('../../models/members.js');
const {getCollectionById} = require('../../models/collections.js');
const {getBookById} = require('../../models/books.js');




/**
 * @description
 * handler destinado a cubrir la petición de mostrar la Página Principal de
 * una Colección concreta, identificada a partir de su miembro poseedor (desde
 * req.params.member), y en concreto como ella misma de entre las colecciones
 * de dicho miembro (desde req.params.collection)
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */
var collectionProfileHandler = async function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/collection-profile.ejs`;
  var info = {};

  info.categories = req.categories;
  info.subcategories = req.subcategories;
  info.languages = req.languages;

  var member = await getMemberById(req.params.member);
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




exports.collectionProfileHandler = collectionProfileHandler;
