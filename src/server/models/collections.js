const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');




var getAllCollections = function () {
  var type = 'collection';
  var collections = db.readPinakes(type);
  return collections;
};


/**
 * @description
 * Se asume que la Colección 'Sin Colección' es aquella con un id nulo
 */
var getCollectionById = function (id) {
  var collection;

  if (id == null) {
    collection = {};
    collection.name = "Libros sin Colección";
    return collection;
  }

  var type = 'collection';
  var collections = db.readPinakes(type);
  var filteredCollections = collections.filter(function (e) {
    return (e.id == id);
  });

  if (filteredCollections.length == 0) {
    collection = null;
  } else {
    collection = filteredCollections[0];
  }

  return collection;
};


var createCollection = function (info) {
  var type = 'collection';
  var collectionId = `col${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newCollection = {
    id: collectionId,
    owner: info.owner,
    addingDate: date,
    name: info.name,
    pic: info.pic
  };
  db.writePinakes(type, collectionId, newCollection);
  return newCollection;
};


var deleteCollection = function (collectionId) {
  var type = 'collection';
  db.erasePinakes(type, collectionId)
  return collectionId
};




exports.getAllCollections = getAllCollections;
exports.getCollectionById = getCollectionById;
exports.createCollection = createCollection;
exports.deleteCollection = deleteCollection;
