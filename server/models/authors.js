const _ = require('lodash');
const authors = require('../../runtime/db/authors.json');




var getAllAuthors = function () {
  return _.cloneDeep(authors);
};


var getAuthorById = function (id) {
  var filteredAuthors = authors.filter(function (e) {
    return (e.id == id);
  });

  var author;
  if (filteredAuthors.length == 0) {
    author = null;
  } else {
    author = filteredAuthors[0];
  };

  return _.cloneDeep(author);
};




exports.getAllAuthors = getAllAuthors;
exports.getAuthorById = getAuthorById;
