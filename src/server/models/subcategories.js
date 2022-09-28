const {db} = require('../connections/rawjson.js');




var getAllSubcategories = function () {
  var type = 'subcategory';
  var subcategories = db.readPinakes(type);
  return subcategories;
};


var getSubcategoryById = function (id) {
  var type = 'subcategory';
  var subcategories = db.readPinakes(type);
  var filteredSubcategories = subcategories.filter(function (e) {
    return (e.id == id);
  });

  var subcategory;
  if (filteredSubcategories.length == 0) {
    subcategory = null;
  } else {
    subcategory = filteredSubcategories[0];
  }

  return subcategory;
};




exports.getAllSubcategories = getAllSubcategories;
exports.getSubcategoryById = getSubcategoryById;
