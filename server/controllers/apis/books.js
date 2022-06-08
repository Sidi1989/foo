const {getAllBooks, getBookById, createBook} = require('../../models/books.js');
const {getCategoryById} = require('../../models/categories.js');
const {getSubcategoryById} = require('../../models/subcategories.js');
const {getLanguageById} = require('../../models/languages.js');
const {getAuthorById} = require('../../models/authors.js');
const {getAllCollections, getCollectionById} = require('../../models/collections.js');




var apiCreateBookHandler = function (req, res) {
  var newBookInfo = {
    owner: req.user.id,
    title: req.body.title,
    author: req.body.author,
    location: req.body.location,
    synopsis: req.body.synopsis,
    pages: req.body.pages,
    dimensions: {
      length: req.body.length,
      width: req.body.width
    },
    format: req.body.format,
    editorial: req.body.editorial,
    publishDate: req.body.publishDate,
    issue: req.body.issue,
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
  var book = getBookById(req.params.book);

  return res.json(book);
};




exports.apiCreateBookHandler = apiCreateBookHandler;
exports.apiListBooksHandler = apiListBooksHandler;
exports.apiRetrieveBookHandler = apiRetrieveBookHandler;
exports.apiEditBookHandler = apiEditBookHandler;
exports.apiDeleteBookHandler = apiDeleteBookHandler;
