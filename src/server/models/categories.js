const {db} = require('../connections/rawjson.js');




var getAllCategories = function () {
  var type = 'category';
  var categories = db.read(type);
  return categories;
};


var getCategoryById = function (id) {
  var type = 'category';
  var categories = db.read(type);
  var filteredCategories = categories.filter(function (e) {
    return (e.id == id);
  });

  var category;
  if (filteredCategories.length == 0) {
    category = null;
  } else {
    category = filteredCategories[0];
  }

  return category;
};




exports.getAllCategories = getAllCategories;
exports.getCategoryById = getCategoryById;
