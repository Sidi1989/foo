const _ = require('lodash');
const {authors} = require('../connections/rawjson.js');




var getAllAuthors = function () {
  return _.cloneDeep(authors);
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

  var clonedAuthors = _.cloneDeep(authors);
  var filteredAuthors = clonedAuthors.filter(function (e) {
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
