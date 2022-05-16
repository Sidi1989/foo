const _ = require('lodash');
const books = require('../../runtime/db/books.json');




var getAllBooks = function () {
  return _.cloneDeep(books);
};


var getBookById = function (id) {
  var filteredBooks = books.filter(function (e) {
    return (e.id == id);
  });

  var book;
  if (filteredBooks.length == 0) {
    book = null;
  } else {
    book = filteredBooks[0];
  };

  return _.cloneDeep(book);
};


var getRandomBooks = function (quantity) {
  var filteredBooks = books.filter(function (e,i) {
    var aleas = Math.random();
    return (aleas > 0.5);
  });

  var takenBooks = _.take(filteredBooks, quantity);
  return _.cloneDeep(takenBooks);
};




exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
