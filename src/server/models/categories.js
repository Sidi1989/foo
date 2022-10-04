const CATEGORIES = [
  {
    "id": "cat1a",
    "name": "Otros"
  },
  {
    "id": "cat2b",
    "name": "Literatura española"
  },
  {
    "id": "cat3c",
    "name": "Literatura extranjera"
  },
  {
    "id": "cat4d",
    "name": "Literatura infantil y/o juvenil"
  },
  {
    "id": "cat5e",
    "name": "Guías y catálogos"
  },
  {
    "id": "cat6f",
    "name": "Enciclopedias y diccionarios"
  }
]

/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "categories"
 */
var getAllCategories = function () {
  return CATEGORIES;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre una "category"
 * específica a partir de la identificación de su atributo "id"
 */
var getCategoryById = function (id) {
  var filteredCategories = CATEGORIES.filter(function (e) {
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
