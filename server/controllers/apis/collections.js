const {getAllCollections, getCollectionById, createCollection, deleteCollection} = require('../../models/collections.js');




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
  var collections = getAllCollections();

  return res.json(collections);
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
