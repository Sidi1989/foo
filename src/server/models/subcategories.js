const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const subcategoriesRelativeDirname = '../../../runtime/db/subcategories';
const subcategoriesAbsoluteDirname = path.join(__dirname, subcategoriesRelativeDirname);
const subcategoriesBasenames = fs.readdirSync(subcategoriesAbsoluteDirname);
const subcategories = subcategoriesBasenames.map(function (e) {
  var pathname = path.join(subcategoriesAbsoluteDirname, e);
  var subcategory = require(pathname);
  return subcategory;
});




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
