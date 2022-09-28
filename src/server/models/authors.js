const {db} = require('../connections/rawjson.js');




var getAllAuthors = function () {
  var type = 'author';
  var authors = db.read(type);
  return authors;
};


/**
 * @description
 * Se asume que el Autor 'Anónimo' es aquel con un id nulo
 */
var getAuthorById = function (id) {
  var author;

  if (id == null) {
    author = {};
    author.name = "Anónimo";
    return author;
  }

  var type = 'author';
  var authors = db.read(type);
  var filteredAuthors = authors.filter(function (e) {
    return (e.id == id);
  });

  if (filteredAuthors.length == 0) {
    author = null;
  } else {
    author = filteredAuthors[0];
  }

  return author;
};




exports.getAllAuthors = getAllAuthors;
exports.getAuthorById = getAuthorById;
