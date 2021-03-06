const {getCollectionById, createCollection, deleteCollection} = require('../../models/collections.js');
const {getMemberById} = require('../../models/members.js');
const {getBookById} = require('../../models/books.js');




var apiCreateCollectionHandler = function (req, res) {
  var newCollectionInfo = {
    owner: req.user.id,
    name: req.body.name,
    pic: req.body.pic
  };
  var newCollection = createCollection(newCollectionInfo);

  var info = {
    status: "OK",
    collection: newCollection
  };
  return res.json(info);
};


var apiListCollectionsHandler = function (req, res) {
  var member = getMemberById(req.params.member);
  var memberCollections = member.collections.map(function (collectionId) {
    var collection = getCollectionById(collectionId);
    var booksInEachCollection = collection.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    collection.books = booksInEachCollection;
    return collection;
  });

  return res.json(memberCollections);
};


var apiRetrieveCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};


var apiEditCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};


var apiDeleteCollectionHandler = function (req, res) {
  deleteCollection(req.params.collection);

  var info = {
    status: "OK",
    collection: req.params.collection
  };
  return res.json(info);
};




exports.apiCreateCollectionHandler = apiCreateCollectionHandler;
exports.apiListCollectionsHandler = apiListCollectionsHandler;
exports.apiRetrieveCollectionHandler = apiRetrieveCollectionHandler;
exports.apiEditCollectionHandler = apiEditCollectionHandler;
exports.apiDeleteCollectionHandler = apiDeleteCollectionHandler;
