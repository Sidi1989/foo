const {getAllBooks, getBookById, getRandomBooks} = require('../../models/books.js');
const {getAllLocations, getLocationById} = require('../../models/locations.js');
const {getAllCategories, getCategoryById} = require('../../models/categories.js');
const {getAllSubcategories, getSubcategoryById} = require('../../models/subcategories.js');
const {getAllLanguages, getLanguageById} = require('../../models/languages.js');
const {getAuthorById} = require('../../models/authors.js');
const {getReviewById} = require('../../models/reviews.js');
const {getMemberById} = require('../../models/members.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookNewHandler= function (req, res) {
  var pathname = `${__dirname}/../../../Pinakes/html/views/book-new.html`;

  var info = {};

  var locations = getAllLocations();
  info.locations = locations;

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;

  info.member = req.user;


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Información sobre un libro concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookProfileHandler = function (req, res) {
  var pathname = `${__dirname}/../../../Pinakes/html/views/book-profile.html`;

  var info = {};

  var book = getBookById(req.params.book);
  if (book == null) {
    info.book = {};
  } else {
    info.book = book;
  };

  var location = getLocationById(book.location);
  if (book.location == null) {
    info.book.location = {};
  } else {
    info.book.location = location;
  };

  var language = getLanguageById(book.language);
  if (book.language == null) {
    info.book.language = {};
  } else {
    info.book.language = language;
  };

  var author = getAuthorById(book.author);
  info.book.author = author;

  var reviewsMapped = book.reviews.map(function (id) {
    var review = getReviewById(id);
    if (review.reviewer == null) {
      review.reviewer = {}
    } else {
      var reviewer = getMemberById(review.reviewer);
      review.reviewer = reviewer;
    };
    return review;
  });
  info.reviews = reviewsMapped;

  var suggestedBooksChunks = getRandomBooks(6, 3);
  suggestedBooksChunks.forEach(function (chunk,i) {
    chunk.forEach(function (book,i) {
      book.author = getAuthorById(book.author);
    });
  });
  info.suggestedBooks = suggestedBooksChunks;

  var locations = getAllLocations();
  info.locations = locations;

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;



/*
  var member = getMemberById(req.user.id);
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
    collection.books = booksInCollection;
    booksInCollection.forEach(function (e) {
      e.author = getAuthorById(e.author);
    });
    return collection;
  });
  info.member.collections = collectionsMapped;
*/

  res.render(pathname, info);
};


/**
* @description
* Función destinada a cubrir la petición de Búsqueda de un nuevo libro
*
* @param req Contiene la información de la petición
* @param res Contiene la renderización de la petición para el cliente
*/
var bookSearchHandler = function (req, res) {
  var pathname = `${__dirname}/../../../Pinakes/html/views/book-search.html`;

  var info = {};

  res.render(pathname, info);
};




exports.bookNewHandler = bookNewHandler;
exports.bookProfileHandler = bookProfileHandler;
exports.bookSearchHandler = bookSearchHandler;
