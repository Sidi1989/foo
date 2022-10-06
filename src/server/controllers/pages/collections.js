const {getBookById} = require('../../models/books.js');
const {getCollectionById} = require('../../models/collections.js');
const {getMemberById} = require('../../models/members.js');




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

  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  } else {
    info.member = member;
  }

  res.render(pathname, info);
};




exports.collectionProfileHandler = collectionProfileHandler;
