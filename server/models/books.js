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

  return book;
};




exports.getBookById = getBookById;
