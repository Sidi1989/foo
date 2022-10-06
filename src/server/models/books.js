const _ = require('lodash');
const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');
const {getAuthorById} = require('./authors');
const {getCollectionById} = require('./collections');
const {getLanguageById} = require('./languages');
const {getLocationById} = require('./locations');




/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "books"
  */
var getAllBooks = function () {
  var type = 'book';
  const books = db.read(type);

  return books;
};


/**
  * @description
  * función con que se filtra y obtiene la información de la DB sobre un "book"
  * específico a partir de la identificación de su atributo "id"; contando además
  * con un segundo parámetro booleano, en función del cual la información sobre
  * el libro será o no más completa, por recuperar en detalle el valor de sus
  * distintos atributos.
  */
var getBookById = function (id, populate) {
  var type = 'book';
  var books = db.read(type);
  var filteredBooks = books.filter(function (e) {
    return (e.id == id);
  });

  var book;
  if (filteredBooks.length == 0) {
    book = null;
  } else {
    book = filteredBooks[0];
  }

  if (populate == true) {
    var location = getLocationById(book.location);
    book.location = location;

    var language = getLanguageById(book.language);
    book.language = language;

    var author = getAuthorById(book.author);
    book.author = author;

    var collection = getCollectionById(book.collection);
    book.collection = collection;

    if (!collection.books) collection.books = [];
    var collectionMapped = collection.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    book.collection.books = collectionMapped;
  }

  return book;
};


/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "books", para a continuación
  * aleatorizar el listado de sus elementos y quedarse con sólo un número
  * específico de ellos, en grupos de varios (ambas opciones siendo los parámetros de la función)
  */
var getRandomBooks = function (quantity, size) {
  var type = 'book';
  var books = db.read(type);

  var shuffledBooks = _.shuffle(books);
  var takenBooks = _.take(shuffledBooks, quantity);
  var chunkBooks = _.chunk(takenBooks, size);

  return chunkBooks;
};


/**
  * @description
  * función para añadir un nuevo elemento al objeto "books" de la DB,
  * asignándole: un atributo "id" cuasialeatorio, un atributo "addingDate"
  * en función del momento en que tenga lugar la llamada de la función, y los demás
  * atributos en función de la información proporcionada al momento de dicha llamada
  */
var createBook = function (info) {
  var type = 'book';
  var bookId = `b${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newBook = {
    id: bookId,
    owner: info.owner,
    addingDate: date,
    collection: info.collection,
    location: info.location,
    title: info.title,
    author: info.author,
    synopsis: info.synopsis,
    pages: info.pages,
    dimensions: info.dimensions,
    format: info.format,
    editorial: info.editorial,
    publishDate: info.publishDate,
    issue: info.issue,
    isbn: info.isbn,
    category: info.category,
    subcategory: info.subcategory,
    language: info.language,
    pic: info.pic
  };
  db.write(type, bookId, newBook);

  return newBook;
};


/**
  * @description
  * función para eliminar un elemento del objeto "books" de la DB, identificado
  * por su atributo "id" (que es el parámetro de la función)
  */
var deleteBook = function (bookId) {
  var type = 'book';
  db.erase(type, bookId);

  return bookId;
};




exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
exports.createBook = createBook;
exports.deleteBook = deleteBook;
