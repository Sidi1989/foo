const _ = require('lodash');
const {subcategories} = require('../connections/rawjson.js');




var getAllSubcategories = function () {
  return _.cloneDeep(subcategories);
};


var getSubcategoryById = function (id) {
  var clonedSubcategories = _.cloneDeep(subcategories);
  var filteredSubcategories = clonedSubcategories.filter(function (e) {
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
