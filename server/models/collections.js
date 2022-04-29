const collections = require('../../runtime/db/collections.json');



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

  return collection;
};




exports.getCollectionById = getCollectionById;