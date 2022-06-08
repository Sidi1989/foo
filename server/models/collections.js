const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {v4: uuidv4} = require('uuid');
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
  }

  return collection;
};


var createCollection = function (info) {
  var collectionId = `col${uuidv4().slice(0,3)}`;
  var newCollection = {
    id: collectionId,
    age: 200,
    owner: info.owner,
    name: info.name,
    pic: info.pic
  };
  var newCollectionAsJson = JSON.stringify(newCollection, null, 2);
  var dirname = collectionsAbsoluteDirname;
  var basename = `${collectionId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newCollectionAsJson);

  return newCollection;
};




exports.getAllCollections = getAllCollections;
exports.getCollectionById = getCollectionById;
exports.createCollection = createCollection;
