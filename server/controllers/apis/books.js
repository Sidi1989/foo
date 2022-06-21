const {getBookById, createBook, deleteBook} = require('../../models/books.js');
const {getMemberById} = require('../../models/members.js');
const {getCollectionById} = require('../../models/collections.js');
const {getLocationById} = require('../../models/locations.js');
const {getAuthorById} = require('../../models/authors.js');
const {getCategoryById} = require('../../models/categories.js');
const {getSubcategoryById} = require('../../models/subcategories.js');
const {getLanguageById} = require('../../models/languages.js');




var apiCreateBookHandler = function (req, res) {
  var newBookInfo = {
    owner: req.user.id,
    collection: req.body.collection,
    location: req.body.location,
    title: req.body.title,
    author: req.body.author,
    synopsis: req.body.synopsis,
    pages: Number(req.body.pages),
    dimensions: {
      length: Number(req.body.lengthDimension),
      width: Number(req.body.widthDimension)
    },
    format: req.body.format,
    editorial: req.body.editorial,
    publishDate: Number(req.body.publishDate),
    issue: Number(req.body.issue),
    isbn: req.body.isbn,
    category: req.body.category,
    subcategory: req.body.subcategory,
    language: req.body.language,
    pic: req.body.pic
  };
  var newBook = createBook(newBookInfo);

  var info = {
    status: "OK",
    book: newBook
  };

  return res.json(info);
};


var apiListBooksHandler = function (req, res) {
  var member = getMemberById(req.params.member);
  var memberBooks = member.books.map(function (bookId) {
    var book = getBookById(bookId);
    return book;
  });

  memberBooks.forEach(function (e) {
    e.collection = getCollectionById(e.collection);
    e.location = getLocationById (e.location);
    e.author = getAuthorById(e.author);
    e.category = getCategoryById(e.category);
    e.subcategory = getSubcategoryById(e.subcategory);
    e.language = getLanguageById(e.language);
  });

  return res.json(memberBooks);
};


var apiRetrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


var apiEditBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


var apiDeleteBookHandler = function (req, res) {
  deleteBook(req.params.book);

  var info = {
    status: "OK",
    book: req.params.book
  };
  return res.json(info);
};




exports.apiCreateBookHandler = apiCreateBookHandler;
exports.apiListBooksHandler = apiListBooksHandler;
exports.apiRetrieveBookHandler = apiRetrieveBookHandler;
exports.apiEditBookHandler = apiEditBookHandler;
exports.apiDeleteBookHandler = apiDeleteBookHandler;
