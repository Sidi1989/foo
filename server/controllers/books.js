const {getBookById, getAllBooks, getRandomBooks} = require('../models/books.js');
const {getAllLocations, getLocationById} = require('../models/locations.js');
const {getAllCategories, getCategoryById} = require('../models/categories.js');
const {getAllSubcategories, getSubcategoryById} = require('../models/subcategories.js');
const {getAllLanguages, getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getReviewById} = require('../models/reviews.js');
const {getUserById} = require('../models/users.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar un nuevo libro
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/bookform.html`;

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
var booksearchHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/booksearch.html`;

  var info = {};

  var books = getAllBooks();

  books.forEach(function (e,i) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e,i) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e,i) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e,i) {
    e.language = getLanguageById(e.language);
  });

  info.books = books;


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Información sobre un libro concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var bookprofileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/bookprofile.html`;

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
      var reviewer = getUserById(review.reviewer);
      review.reviewer = reviewer;
    };

    return review;
  });
  info.reviews = reviewsMapped

  var suggestedBooks = getRandomBooks(3);
  suggestedBooks.forEach(function (e,i) {
    e.author = getAuthorById(e.author);
  });
  info.suggestedBooks = suggestedBooks;


  res.render(pathname, info);
};




exports.bookformHandler = bookformHandler;
exports.booksearchHandler = booksearchHandler;
exports.bookprofileHandler = bookprofileHandler;
