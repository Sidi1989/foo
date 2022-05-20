const {getAllBooks, getBookById, getRandomBooks} = require('../models/books.js');
const {getAllLocations, getLocationById} = require('../models/locations.js');
const {getAllCategories, getCategoryById} = require('../models/categories.js');
const {getAllSubcategories, getSubcategoryById} = require('../models/subcategories.js');
const {getAllLanguages, getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getReviewById} = require('../models/reviews.js');
const {getMemberById} = require('../models/members.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookNewHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/bookNew.html`;

  var info = {};

  var locations = getAllLocations();
  info.locations = locations;

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;


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
  var pathname = `${__dirname}/../../Pinakes/html/views/bookSearch.html`;

  var info = {};

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
  var pathname = `${__dirname}/../../Pinakes/html/views/bookProfile.html`;

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
  if (book.author == null) {
    info.book.author = {};
  } else {
    info.book.author = author;
  };

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
  info.reviews = reviewsMapped

  var suggestedBooksChunks = getRandomBooks(6, 3);
  suggestedBooksChunks.forEach(function (chunk,i) {
    chunk.forEach(function (book,i) {
      book.author = getAuthorById(book.author);
    });
  });
  info.suggestedBooks = suggestedBooksChunks;


  res.render(pathname, info);
};




exports.bookNewHandler = bookNewHandler;
exports.bookSearchHandler = bookSearchHandler;
exports.bookProfileHandler = bookProfileHandler;
