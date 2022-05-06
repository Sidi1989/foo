const {getUserById} = require('../models/users.js');
const {getBookById, getRandomBooks} = require('../models/books.js');
const {getCollectionById} = require('../models/collections.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar a un nuevo usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/userform.html`;
  var info = {};

  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Login de un usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userloginHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/userlogin.html`;
  var info = {};

  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Mostrar el Home de un usuario concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userprofileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/userprofile.html`;

  var user = getUserById(req.params.user);

  var info = {};
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };


  var lastBookRead = getBookById(user.lastBookRead);

  if (lastBookRead == null) {
    info.lastBookRead = {};
  } else {
    info.lastBookRead = lastBookRead;
  };


  var lastBookReadCollection = getCollectionById(lastBookRead.collection);

  if (lastBookReadCollection == null) {
    info.lastBookReadCollection = {};
  } else {
    info.lastBookReadCollection = lastBookReadCollection;
  };


  var booksInLastCollection = lastBookReadCollection.books.map(function (id) {
    var book = getBookById(id);
    return book;
  });

  info.booksInLastCollection = booksInLastCollection;


  var suggestedBooks = getRandomBooks(3);
  info.suggestedBooks = suggestedBooks;


  res.render(pathname, info);
};




exports.userformHandler = userformHandler;
exports.userloginHandler = userloginHandler;
exports.userprofileHandler = userprofileHandler;
