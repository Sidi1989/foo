const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const authorsRelativeDirname = '../../runtime/db/authors';
const authorsAbsoluteDirname = path.join(__dirname, authorsRelativeDirname);
const authorsBasenames = fs.readdirSync(authorsAbsoluteDirname);
const authors = authorsBasenames.map(function (e) {
  var pathname = path.join(authorsAbsoluteDirname, e);
  var author = require(pathname);
  return author;
});




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
