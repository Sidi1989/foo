const authors = require('../../runtime/db/authors.json');




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

  return author;
};




exports.getAuthorById = getAuthorById;
