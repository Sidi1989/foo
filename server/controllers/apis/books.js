const {getAllBooks, getBookById, createBook, deleteBook} = require('../../models/books.js');
const {getCategoryById} = require('../../models/categories.js');
const {getSubcategoryById} = require('../../models/subcategories.js');
const {getAuthorById} = require('../../models/authors.js');
const {getLanguageById} = require('../../models/languages.js');
const {getCollectionById} = require('../../models/collections.js');




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
  var books = getAllBooks();

  books.forEach(function (e) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e) {
    e.language = getLanguageById(e.language);
  });
  books.forEach(function (e) {
    e.collection = getCollectionById(e.collection);
  });

  return res.json(books);
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
