const {db} = require('../connections/rawjson.js');



const CATEGORIES = []

/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "categories"
 */
var getAllCategories = function () {
  var type = 'category';
  var categories = db.read(type);
  return categories;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre una "category"
 * específica a partir de la identificación de su atributo "id"
 */
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
