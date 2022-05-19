const _ = require('lodash');
const categories = require('../../runtime/db/categories.json');




var getAllCategories = function () {
  return _.cloneDeep(categories);
};


var getCategoryById = function (id) {
  var clonedCategories = _.cloneDeep(categories);
  var filteredCategories = clonedCategories.filter(function (e) {
    return (e.id == id);
  });

  var category;
  if (filteredCategories.length == 0) {
    category = null;
  } else {
    category = filteredCategories[0];
  };

  return category;
};




exports.getAllCategories = getAllCategories;
exports.getCategoryById = getCategoryById;
