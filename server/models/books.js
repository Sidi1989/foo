const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {v4: uuidv4} = require('uuid');
const booksRelativeDirname = '../../runtime/db/books';
const booksAbsoluteDirname = path.join(__dirname, booksRelativeDirname);
const booksBasenames = fs.readdirSync(booksAbsoluteDirname);
const books = booksBasenames.map(function (e) {
  var pathname = path.join(booksAbsoluteDirname, e);
  var book = require(pathname);
  return book;
});




var getAllBooks = function () {
  return _.cloneDeep(books);
};


var getBookById = function (id) {
  var clonedBooks = _.cloneDeep(books);
  var filteredBooks = clonedBooks.filter(function (e) {
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
  var clonedBooks = _.cloneDeep(books);
  var shuffledBooks = _.shuffle(clonedBooks);
  var takenBooks = _.take(shuffledBooks, quantity);
  var chunkBooks = _.chunk(takenBooks, size);
  return chunkBooks;
};


var createBook = function (info) {
  var bookId = `b${uuidv4().slice(0,3)}`;
  var newBook = {
    id: bookId,
    addingDate: 50,
    owner: info.owner,
    title: info.title,
    author: info.author,
    location: info.location,
    synopsis: info.synopsis,
    pages: info.pages,
    dimensions: {
      length: info.length,
      width: info.width
    },
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
  var newBookAsJson = JSON.stringify(newBook, null, 2);
  var dirname = booksAbsoluteDirname;
  var basename = `${bookId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newBookAsJson);

  return newBook;
};




exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
exports.createBook = createBook;
