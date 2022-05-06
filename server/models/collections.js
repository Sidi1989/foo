const _ = require('lodash');
const collections = require('../../runtime/db/collections.json');




var getAllCollections = function () {
  return _.cloneDeep(collections);
};


var getCollectionById = function (id) {
  var filteredCollections = collections.filter(function (e) {
    return (e.id == id);
  });

  var collection;
  if (filteredCollections.length == 0) {
    collection = null;
  } else {
    collection = filteredCollections[0];
  };

  return _.cloneDeep(collection);
};




exports.getAllCollections = getAllCollections;
exports.getCollectionById = getCollectionById;
