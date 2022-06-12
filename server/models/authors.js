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


var getAuthorById = function (id) {
  if (id == null) {
    var author = {};
    author.name = "Anónimo";
    return author;
  }
  var clonedAuthors = _.cloneDeep(authors);
  var filteredAuthors = clonedAuthors.filter(function (e) {
    return (e.id == id);
  });

  var author;
  if (filteredAuthors.length == 0) {
    author = null;
  } else {
    author = filteredAuthors[0];
  }

  return author;
};

/*var getAuthorById = function (id) {
  var clonedAuthors = _.cloneDeep(authors);
  var filteredAuthors = clonedAuthors.filter(function (e) {
    if (e.id == null) {
      author.name = "Anónimo";
    }
    return e.id;
  });
  return (e.id == id);*/




exports.getAllAuthors = getAllAuthors;
exports.getAuthorById = getAuthorById;
