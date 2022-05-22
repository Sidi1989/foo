const _ = require('lodash');
const authors = require('../../runtime/db/authors.json');




var getAllAuthors = function () {
  return _.cloneDeep(authors);
};


var getAuthorById = function (id) {
  if (id == null) {
    var author = {};
    author.name = "Anónimo";
    return author;
  };

  var clonedAuthors = _.cloneDeep(authors);
  var filteredAuthors = clonedAuthors.filter(function (e) {
    return (e.id == id);
  });

  var author;
  if (filteredAuthors.length == 0) {
    author = null;
  } else {
    author = filteredAuthors[0];
  };

  return author;
};




exports.getAllAuthors = getAllAuthors;
exports.getAuthorById = getAuthorById;
