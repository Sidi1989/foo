const categories = require('../../runtime/db/categories.json');




var getCategoryById = function (id) {
  var filteredCategories = categories.filter(function (e) {
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




exports.getCategoryById = getCategoryById;
