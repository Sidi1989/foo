const fs = require('fs');
const path = require('path');
const _ = require('lodash');
//const collections = require('../../runtime/db/collections.json');
const collectionsRelativeDirname = '../../runtime/db/collections';
const collectionsAbsoluteDirname = path.join(__dirname, collectionsRelativeDirname);
const collectionsBasenames = fs.readdirSync(collectionsAbsoluteDirname);
const collections = collectionsBasenames.map(function (e) {
  var pathname = path.join(collectionsAbsoluteDirname, e);
  var collection = require(pathname);
  return collection;
});




var getAllCollections = function () {
  return _.cloneDeep(collections);
};


var getCollectionById = function (id) {
  var clonedCollections = _.cloneDeep(collections);
  var filteredCollections = clonedCollections.filter(function (e) {
    return (e.id == id);
  });

  var collection;
  if (filteredCollections.length == 0) {
    collection = null;
  } else {
    collection = filteredCollections[0];
  };

  return collection;
};




exports.getAllCollections = getAllCollections;
exports.getCollectionById = getCollectionById;
