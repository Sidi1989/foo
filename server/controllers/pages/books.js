const {getAllLocations, getLocationById} = require('../../models/locations.js');
const {getAllCategories} = require('../../models/categories.js');
const {getAllSubcategories} = require('../../models/subcategories.js');
const {getAllLanguages, getLanguageById} = require('../../models/languages.js');
const {getBookById, getRandomBooks} = require('../../models/books.js');
const {getMemberById, getCollectionsForMember} = require('../../models/members.js');
const {getAuthorById} = require('../../models/authors.js');
const {getCollectionById} = require('../../models/collections.js');
const {getReviewById} = require('../../models/reviews.js');




/**
 * @description
 * función destinada a cubrir la petición de mostrar la Página Principal de un libro
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */

var bookProfileHandler = function (req, res) {
  var pathname = `${__dirname}/../../../views/html/pages/book-profile.html`;
  var info = {};

  var locations = getAllLocations();
  info.locations = locations;

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;

  var book = getBookById(req.params.book);
  if (book == null) {
    info.book = {};
  } else {
    info.book = book;
  }

  info.member = req.user;
  var memberCollections = getCollectionsForMember(req.user.id);
  info.member.collections = memberCollections;

  var location = getLocationById(book.location);
  info.book.location = location;

  var language = getLanguageById(book.language);
  info.book.language = language;

  var author = getAuthorById(book.author);
  info.book.author = author;

  var collection = getCollectionById(book.collection);
  info.book.collection = collection;

  var reviewsMapped = book.reviews.map(function (id) {
    var review = getReviewById(id);
    if (review.reviewer == null) {
      review.reviewer = {}
    } else {
      var reviewer = getMemberById(review.reviewer);
      review.reviewer = reviewer;
    }
    return review;
  });
  info.reviews = reviewsMapped;

  var suggestedBooksChunks = getRandomBooks(6, 3);
  suggestedBooksChunks.forEach(function (chunk) {
    chunk.forEach(function (book) {
      book.author = getAuthorById(book.author);
    });
  });
  info.suggestedBooks = suggestedBooksChunks;


  res.render(pathname, info);
};


/**
* @description
* función destinada a cubrir la petición de Búsqueda de un libro
* (cualquiera que los miembros no reserven para "sólo vista privada")
*
* @param req contiene la información de la petición
* @param res contiene la renderización de la petición para el cliente
*/

var bookSearchHandler = function (req, res) {
  var pathname = `${__dirname}/../../../views/html/pages/book-search.html`;
  var info = {};


  res.render(pathname, info);
};




exports.bookProfileHandler = bookProfileHandler;
exports.bookSearchHandler = bookSearchHandler;
