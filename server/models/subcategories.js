const _ = require('lodash');
const subcategories = require('../../runtime/db/subcategories.json');




var getSubcategoryById = function (id) {
  var filteredSubcategories = subcategories.filter(function (e) {
    return (e.id == id);
  });

  var subcategory;
  if (filteredSubcategories.length == 0) {
    subcategory = null;
  } else {
    subcategory = filteredSubcategories[0];
  };

  return subcategory;
};


var getAllSubcategories = function () {
  return _.cloneDeep(subcategories);
};




exports.getSubcategoryById = getSubcategoryById;
exports.getAllSubcategories = getAllSubcategories;
