const {getLocationById} = require('../../models/locations.js');
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
 * handler destinado a cubrir la petición de mostrar la Página Principal de
 * un Libro concreto (identificado desde req.params.book); y que recupera además
 * información transversal sobre su poseedor (identificado desde req.user.id)
 *
 * @param req contiene la información de la petición
 * @param res contiene la renderización de la petición para el cliente
 */

var bookProfileHandler = function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/book-profile.ejs`;
  var info = {};

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

  var member = getMemberById (req.user.id);
  info.member = member;

  var memberCollections = getCollectionsForMember(member.id);
  info.member.collections = memberCollections;

  var location = getLocationById(book.location);
  info.book.location = location;

  var language = getLanguageById(book.language);
  info.book.language = language;

  var author = getAuthorById(book.author);
  info.book.author = author;

  var collection = getCollectionById(book.collection);
  info.book.collection = collection;

  if (!collection.books) collection.books = [];
  var collectionMapped = collection.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });
  info.book.collection.books = collectionMapped;

  if (!info.book.reviews) info.book.reviews = [];
  var reviewsMapped = info.book.reviews.map(function (id) {
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




exports.bookProfileHandler = bookProfileHandler;
