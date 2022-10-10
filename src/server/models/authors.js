const {db: nodeDB} = require('../connections/nodejsondb.js');




/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "authors"
  */
var getAllAuthors = async function () {
  const authors = await nodeDB.read('author');

  return authors;
};


/**
  * @description
  * función con que se filtra y obtiene la información de la DB sobre un "author"
  * específico a partir de la identificación de su atributo "id".
  * Previéndose además que el author.name sea 'Anónimo' cuando (id == null)
  */
var getAuthorById = async function (id) {
const authors = await nodeDB.read('author');

  var author;
  if (id == null) {
    author = {};
    author.name = "Anónimo";
    return author;
  }

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
