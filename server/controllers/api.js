const {getAllBooks, getBookById} = require('../models/books.js');
const {getAllMembers} = require('../models/members.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getAllCollections} = require('../models/collections.js');
const {getPetitionById} = require('../models/petitions.js');




var apiSignInHandler = function (req, res) {
  console.log(req.body);

  var members = getAllMembers();
  var filteredMembers = members.filter(function (e,i) {
    return (req.body.email == e.email)
  });

  if (filteredMembers.length == 0) {
    return res.json({
      status: 'KO',
      message: 'Credenciales inválidas'
    });
  };

  var member = filteredMembers[0];
  if (member.password == req.body.password) {
    return res.json({
      status: 'OK',
      id: member.id,
      session: new Date()
    });
  } else {
    return res.json({
      status: 'KO',
      message: 'Credenciales inválidas'
    });
  }
};


var apiCreateBookHandler = function (req, res) {
  console.log(req.body);
  var bookId = new Date();
  var info = {
    status: "OK",
    book: bookId
  };
  return res.json(info);
};


var apiCreateCollectionHandler = function (req, res) {
  console.log(req.body);
  var collectionId = new Date();
  var info = {
    status: "OK",
    book: collectionId
  };
  return res.json(info);
};


var apiListBooksHandler = function (req, res) {
  var books = getAllBooks();

  books.forEach(function (e,i) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e,i) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e,i) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e,i) {
    e.language = getLanguageById(e.language);
  });

  return res.json(books);
};


var apiRetrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


var apiListCollectionsHandler = function (req, res) {
  var collections = getAllCollections();

  return res.json(collections);
};


var apiRetrievePetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};




exports.apiSignInHandler = apiSignInHandler;
exports.apiCreateBookHandler = apiCreateBookHandler;
exports.apiCreateCollectionHandler = apiCreateCollectionHandler;
exports.apiListBooksHandler = apiListBooksHandler;
exports.apiRetrieveBookHandler = apiRetrieveBookHandler;
exports.apiListCollectionsHandler = apiListCollectionsHandler;
exports.apiRetrievePetitionHandler = apiRetrievePetitionHandler;
