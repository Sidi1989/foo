const _ = require('lodash');
const books = require('../../runtime/db/books.json');




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

  var filteredTakenBooks = _.take(filteredBooks, quantity);
  return _.cloneDeep(filteredTakenBooks);
};


var getAllBooks = function () {
  return _.cloneDeep(books);
};



exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
exports.getAllBooks = getAllBooks;
