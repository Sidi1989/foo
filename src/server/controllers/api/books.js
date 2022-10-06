const {getAllBooks, getBookById, createBook, deleteBook} = require('../../models/books.js');
const {getMemberById} = require('../../models/members.js');
const {getCollectionById} = require('../../models/collections.js');
const {getLocationById} = require('../../models/locations.js');
const {getAuthorById} = require('../../models/authors.js');
const {getCategoryById} = require('../../models/categories.js');
const {getSubcategoryById} = require('../../models/subcategories.js');
const {getLanguageById} = require('../../models/languages.js');




/**
  * @description
  * función para listar todos los libros, obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con los mismos.
  */
var listBooksHandler = function (req, res) {
  var books = getAllBooks();

  books.forEach(function (e) {
    e.collection = getCollectionById(e.collection);
    e.location = getLocationById (e.location);
    e.author = getAuthorById(e.author);
    e.category = getCategoryById(e.category);
    e.subcategory = getSubcategoryById(e.subcategory);
    e.language = getLanguageById(e.language);
  });

  return res.json(books);
};


/**
  * @description
  * función para listar todos los libros de un miembro determinado (conocido a partir
  * de su id en req.params.member), obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con los mismos.
  */
var listMemberBooksHandler = function (req, res) {
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


/**
  * @description
  * handler para responder a la petición de la creación de un nuevo libro,
  * a partir de los datos proporcionados en el req.body.
  */
var createBookHandler = function (req, res) {
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


/**
  * @description
  * handler para responder a la petición de recuperar la información almacenada
  * sobre un libro concreto (conocido a partir de su id en req.params.book).
  */
var retrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


/**
  * @description
  * handler para responder a la petición de modificar la información almacenada
  * sobre un libro concreto (conocido a partir de su id en req.params.book).
  */
var editBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


/**
  * @description
  * handler para responder a la petición de eliminar la información almacenada
  * sobre un libro concreto (conocido a partir de su id en req.params.book).
  */
var deleteBookHandler = function (req, res) {
  deleteBook(req.params.book);

  var info = {
    status: "OK",
    book: req.params.book
  };

  return res.json(info);
};




exports.listBooksHandler = listBooksHandler;
exports.listMemberBooksHandler = listMemberBooksHandler;
exports.createBookHandler = createBookHandler;
exports.retrieveBookHandler = retrieveBookHandler;
exports.editBookHandler = editBookHandler;
exports.deleteBookHandler = deleteBookHandler;
