const _ = require('lodash');
const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');
const {db: nodeDB} = require('../connections/nodejsondb.js');
const {getSubcategoryById} = require('./subcategories');
const {getCategoryById} = require('./categories');
const {getLanguageById} = require('./languages');
const {getAuthorById} = require('./authors');

const {getLocationById} = require('./locations');
const {getCollectionById} = require('./collections');
const {getReviewById} = require('./reviews');




/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "books"
  */
var getAllBooks = async function () {
  const books = await nodeDB.read('book');

  for (let e of books) {
    // Autor del Libro
    e.author = await getAuthorById(e.author);
    if (e.author == null) e.author = {};

    // Idioma del Libro
    e.language = getLanguageById(e.language);
    if (e.language == null) e.language = {};

    // Categoría del Libro
    e.category = getCategoryById(e.category);
    if (e.category == null) e.category = {};

    // Subcategoría del Libro
    e.subcategory = getSubcategoryById(e.subcategory);
    if (e.subcategory == null) e.subcategory = {};
  }

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
var getBookById = async function (id, populate) {
  const books = await nodeDB.read('book');
  var filteredBooks = books.filter(function (e) {
    return (e.id == id);
  });

  var book;
  if (filteredBooks.length == 0) {
    book = null;
  } else {
    book = filteredBooks[0];
  }

  for (let e of books) {
    // Autor del Libro
    e.author = await getAuthorById(e.author);
    if (e.author == null) e.author = {};

    // Idioma del Libro
    e.language = getLanguageById(e.language);
    if (e.language == null) e.language = {};

    // Categoría del Libro
    e.category = getCategoryById(e.category);
    if (e.category == null) e.category = {};

    // Subcategoría del Libro
    e.subcategory = getSubcategoryById(e.subcategory);
    if (e.subcategory == null) e.subcategory = {};
  }

  if (populate == true) {

    // Sede del Libro
    book.location = await getLocationById(book.location);
    if (book.location == null) book.location = {};

    // Colección del Libro
    book.collection = await getCollectionById(book.collection);
    if (book.collection == null) book.collection = {};
        // Paso 1: Se define el contenido en libros de la collection
    var allBooks = await getAllBooks();
    var booksInCollection = allBooks.filter(function (b) {
        (b.collection == book.collection.id)
      });
        // Paso 2: Se sobreescriben los libros populados en el array de book.collections.books
    book.collection.books = booksInCollection;

    // Reviews del Libro
    if (!book.reviews) books.reviews = [];
    var reviewsPopulated = [];
    for (let reviewId of book.reviews) {
      let review = await getReviewById(reviewId);
      reviewsPopulated.push(review);
    }
    book.reviews = reviewsPopulated;

  }
  return book;
};


/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "books", para a continuación
  * aleatorizar el listado de sus elementos y quedarse con sólo un número
  * específico de ellos, en grupos de varios (ambas opciones siendo los parámetros de la función)
  */
var getRandomBooks = async function (quantity, size) {
  const books = await nodeDB.read('book');

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
