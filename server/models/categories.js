const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const categoriesRelativeDirname = '../../runtime/db/categories';
const categoriesAbsoluteDirname = path.join(__dirname, categoriesRelativeDirname);
const categoriesBasenames = fs.readdirSync(categoriesAbsoluteDirname);
const categories = categoriesBasenames.map(function (e) {
  var pathname = path.join(categoriesAbsoluteDirname, e);
  var category = require(pathname);
  return category;
});




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
  }

  return category;
};




exports.getAllCategories = getAllCategories;
exports.getCategoryById = getCategoryById;
