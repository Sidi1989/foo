const {getRandomQuotes} = require('../../models/quotes.js');
const {getMemberById, getLastBookForMember} = require('../../models/members.js');
const {getAllCategories} = require('../../models/categories.js');
const {getAllSubcategories} = require('../../models/subcategories.js');
const {getAllLanguages} = require('../../models/languages.js');
const {getCollectionById} = require('../../models/collections.js');
const {getBookById, getRandomBooks} = require('../../models/books.js');
const {getAuthorById} = require('../../models/authors.js');
const {getPetitionById} = require('../../models/petitions.js');




/**
* @description
* función destinada a cubrir la petición del login de un usuario
*
* @param req contiene la información de la petición
* @param res contiene la renderización de la petición para el cliente
*/

var signInHandler= function (req, res) {
  var pathname = `${__dirname}/../../../views/html/pages/sign-in.html`;
  var info = {};

  var dailyQuote = getRandomQuotes(1)[0];
  info.quote = dailyQuote;


  res.render(pathname, info);
};


/**
 * @description
 * función destinada a cubrir la petición de Creación de un nuevo miembro
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */

var signUpHandler= function (req, res) {
  var pathname = `${__dirname}/../../../views/html/pages/sign-up.html`;
  var info = {};


  res.render(pathname, info);
};


/**
 * @description
 * función destinada a cubrir la petición de mostrar las Características de la cuenta de un miembro
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */

var memberEditHandler= function (req, res) {
  var pathname = `${__dirname}/../../../views/html/pages/member-edit.html`;
  var info = {};

  var member = getMemberById(req.params.member);
  if (member == null) {
    info.member = {};
  } else {
    info.member = member;
  }

  var memberLastBook = getLastBookForMember(member.id);
  info.member.lastBookAdded = memberLastBook;


  res.render(pathname, info);
};


/**
 * @description
 * función destinada a cubrir la petición de mostrar la Página Principal de un miembro
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */

var memberProfileHandler = function (req, res) {
  var pathname = `${__dirname}/../../../views/html/pages/member-profile.html`;
  var info = {};

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;

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
    booksInEachCollection.forEach(function (e) {
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

  var booksMapped = member.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });
  booksMapped.forEach(function (e) {
    e.author = getAuthorById(e.author);
  });
  info.member.books = booksMapped;

  var orphanBooks = booksMapped.filter(e => e.collection == null);
  info.orphanBooks = orphanBooks;

  var lastBookAdded = getLastBookForMember(member.id);
  if (lastBookAdded == null) {
    info.lastBookAdded = {};
  } else {
    info.lastBookAdded = lastBookAdded;
  }

  var lastBookAddedAuthor = getAuthorById(lastBookAdded.author);
  if (lastBookAddedAuthor == null) {
    info.lastBookAdded.author = {};
  } else {
    info.lastBookAdded.author = lastBookAddedAuthor;
  }

  var lastBookAddedCollection = getCollectionById(lastBookAdded.collection);
  if (lastBookAddedCollection == null) {
    info.lastBookAdded.collection = {};
  } else {
    info.lastBookAdded.collection = lastBookAddedCollection;
  }

  var lastBookAddedCollectionMapped = lastBookAddedCollection.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });
  info.lastBookAdded.collection.books = lastBookAddedCollectionMapped;

  var suggestedBooksChunks = getRandomBooks(6, 3);
  suggestedBooksChunks.forEach(function (chunk) {
    chunk.forEach(function (book) {
      book.author = getAuthorById(book.author);
    });
  });
  info.suggestedBooks = suggestedBooksChunks;


  res.render(pathname, info);
};




exports.signInHandler = signInHandler;
exports.signUpHandler = signUpHandler;
exports.memberEditHandler = memberEditHandler;
exports.memberProfileHandler = memberProfileHandler;
