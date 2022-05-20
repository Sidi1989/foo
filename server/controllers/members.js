const {getMemberById} = require('../models/members.js');
const {getBookById, getRandomBooks} = require('../models/books.js');
const {getCollectionById} = require('../models/collections.js');
const {getAuthorById} = require('../models/authors.js');
const {getPetitionById} = require('../models/petitions.js');
const {getAllCategories, getCategoryById} = require('../models/categories.js');
const {getAllSubcategories, getSubcategoryById} = require('../models/subcategories.js');
const {getAllLanguages, getLanguageById} = require('../models/languages.js');
const {getQuoteById, getRandomQuotes} = require('../models/quotes.js');




/**
* @description
* Función destinada a cubrir la petición de Login de un miembro
*
* @param req Contiene la información de la petición
* @param res Contiene la renderización de la petición para el cliente
*/
var memberSignInHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/memberSignIn.html`;
  var info = {};

  var dailyQuote = getRandomQuotes(1)[0];
  info.quote = dailyQuote;


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Registrar a un nuevo miembro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var memberSignUpHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/memberSignUp.html`;
  var info = {};


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Mostrar las Preferencias de un miembro concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var memberEditHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/memberEdit.html`;

  var info = {};

  var member = getMemberById(req.params.member);
  if (member == null) {
    info.member = {};
  } else {
    info.member = member;
  };


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Mostrar el Home de un miembro concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var memberProfileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/memberProfile.html`;

  var info = {};

  var member = getMemberById(req.params.member);
  if (member == null) {
    info.member = {};
  } else {
    info.member = member;
  };

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;

  var collectionsMapped = member.collections.map(function (collectionId) {
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
  info.member.collections = collectionsMapped;

  var petitionsMapped = member.petitions.map(function (petitionId) {
    var petition = getPetitionById(petitionId);
    return petition;
    });
    petitionsMapped.forEach(function (e) {
      e.author = getAuthorById(e.author);
  });
  info.member.petitions = petitionsMapped;

  var lastBookRead = getBookById(member.lastBookRead);
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

  var suggestedBooksChunks = getRandomBooks(6, 3);
  suggestedBooksChunks.forEach(function (chunk,i) {
    chunk.forEach(function (book,i) {
      book.author = getAuthorById(book.author);
    });
  });
  info.suggestedBooks = suggestedBooksChunks;


  res.render(pathname, info);
};




exports.memberSignInHandler = memberSignInHandler;
exports.memberSignUpHandler = memberSignUpHandler;
exports.memberEditHandler = memberEditHandler;
exports.memberProfileHandler = memberProfileHandler;
