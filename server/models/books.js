const _ = require('lodash');
const books = require('../../runtime/db/books.json');




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
  };

  if (book.author == null) {
    book.author.name = "Anónimo";
  } else {
    book.author.name = book.author.name
  };

  return book;
};


var getRandomBooks = function (quantity, size) {
  var clonedBooks = _.cloneDeep(books);
  var shuffledBooks = _.shuffle(clonedBooks);
  var takenBooks = _.take(shuffledBooks, quantity);
  var chunkBooks = _.chunk(takenBooks, size);
  return chunkBooks;
};




exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
