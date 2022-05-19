const {getUserById} = require('../models/users.js');
const {getBookById, getRandomBooks} = require('../models/books.js');
const {getCollectionById} = require('../models/collections.js');
const {getPetitionById} = require('../models/petitions.js');
const {getAuthorById} = require('../models/authors.js');
const {getQuoteById, getRandomQuotes} = require('../models/quotes.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar a un nuevo usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/signup.html`;
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
  var pathname = `${__dirname}/../../Pinakes/html/views/signin.html`;
  var info = {};

  var dailyQuote = getRandomQuotes(1)[0];
  info.quote = dailyQuote;


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Mostrar la Configuración de un usuario concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var useraccountHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/useraccount.html`;

  var info = {};

  var user = getUserById(req.params.user);
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };


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
    booksInCollection.forEach(function (e) {
      e.author = getAuthorById(e.author);
    });
    return collection;
  });
  info.user.collections = collectionsMapped;

  var petitionsMapped = user.petitions.map(function (petitionId) {
    var petition = getPetitionById(petitionId);
    return petition;
    });
    petitionsMapped.forEach(function (e) {
      e.author = getAuthorById(e.author);
  });
  info.user.petitions = petitionsMapped;

  var lastBookRead = getBookById(user.lastBookRead);
  if (lastBookRead == null) {
    info.lastBookRead = {};
  } else {
    info.lastBookRead = lastBookRead;
  };

  var lastBookReadAuthor = getAuthorById(lastBookRead.author);
  if (lastBookReadAuthor == null) {
    info.lastBookRead.author = {};
  } else {
    info.lastBookRead.author = lastBookReadAuthor;
  };

  var lastBookReadCollection = getCollectionById(lastBookRead.collection);
  if (lastBookReadCollection == null) {
    info.lastBookRead.collection = {};
  } else {
    info.lastBookRead.collection = lastBookReadCollection;
  };

  var booksMapped = lastBookReadCollection.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });
  info.lastBookRead.collection.books = booksMapped;

  var suggestedBooks = getRandomBooks(6, 3);
  suggestedBooks.forEach(function (e,i) {
    e.author = getAuthorById(e.author);
  });
  info.suggestedBooks = suggestedBooks;


  res.render(pathname, info);
};




exports.userformHandler = userformHandler;
exports.userloginHandler = userloginHandler;
exports.useraccountHandler = useraccountHandler;
exports.userprofileHandler = userprofileHandler;
