const {getAllCollections, getCollectionById} = require('../../models/collections.js');




var apiCreateCollectionHandler = function (req, res) {
  var collectionId = new Date();
  var info = {
    status: "OK",
    collection: collectionId
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
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};




exports.apiCreateCollectionHandler = apiCreateCollectionHandler;
exports.apiListCollectionsHandler = apiListCollectionsHandler;
exports.apiRetrieveCollectionHandler = apiRetrieveCollectionHandler;
exports.apiEditCollectionHandler = apiEditCollectionHandler;
exports.apiDeleteCollectionHandler = apiDeleteCollectionHandler;
