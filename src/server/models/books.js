const {v4: uuidv4} = require('uuid');
const _ = require('lodash');
const {db} = require('../connections/rawjson.js');




var getAllBooks = function () {
  var type = 'book';
  const books = db.readPinakes(type);
  return books;
};


var getBookById = function (id) {
  var type = 'book';
  var books = db.readPinakes(type);
  var filteredBooks = books.filter(function (e) {
    return (e.id == id);
  });

  var book;
  if (filteredBooks.length == 0) {
    book = null;
  } else {
    book = filteredBooks[0];
  }

  return book;
};


var getRandomBooks = function (quantity, size) {
  var type = 'book';
  var books = db.readPinakes(type);
  var shuffledBooks = _.shuffle(books);
  var takenBooks = _.take(shuffledBooks, quantity);
  var chunkBooks = _.chunk(takenBooks, size);
  return chunkBooks;
};


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
  db.writePinakes(type, bookId, newBook);
  return newBook;
};


var deleteBook = function (bookId) {
  var type = 'book';
  db.erasePinakes(type, bookId)
  return bookId
};




exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
exports.createBook = createBook;
exports.deleteBook = deleteBook;
