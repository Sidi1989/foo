const {getUserById} = require('../models/users.js');
const {getBookById} = require('../models/books.js')
const {getCollectionById} = require('../models/collections.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar una nueva colección para el usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var collectionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/collectionform.html`;

  var user = getUserById(req.params.user);

  var info = {};
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var collections = user.collections.map(function (id) {
    var collection = getCollectionById(id);
    return collection;
  });


  var collectionsEnhanced = collections.map(function (collection) {
    var books = collection.books.map(function (id) {
      var book = getBookById(id);
      return book;
    });
    collection.books = books;
    return collection;
  });

  info.collections = collectionsEnhanced;
  
  res.render(pathname, info);
};




exports.collectionformHandler = collectionformHandler;
