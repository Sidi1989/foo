const {db} = require('../connections/rawjson.js');




/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "subcategories"
 */
var getAllSubcategories = function () {
  var type = 'subcategory';
  var subcategories = db.read(type);
  return subcategories;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre una "subcategory"
 * específica a partir de la identificación de su atributo "id"
 */
var getSubcategoryById = function (id) {
  var type = 'subcategory';
  var subcategories = db.read(type);
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
