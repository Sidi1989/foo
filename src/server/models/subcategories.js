const SUBCATEGORIES = [
  {
    "id": "subcat1aa",
    "name": "Otros",
    "parent": "cat1a"
  },
  {
    "id": "subcat1ab",
    "name": "Otros",
    "parent": "cat2b"
  },
  {
    "id": "subcat1ac",
    "name": "Otros",
    "parent": "cat3c"
  },
  {
    "id": "subcat1ad",
    "name": "Otros",
    "parent": "cat4d"
  },
  {
    "id": "subcat1ae",
    "name": "Otros",
    "parent": "cat5e"
  },
  {
    "id": "subcat1af",
    "name": "Otros",
    "parent": "cat6f"
  },
  {
    "id": "subcat2ba",
    "name": "Novela",
    "parent": "cat2b"
  },
  {
    "id": "subcat2bb",
    "name": "Novela",
    "parent": "cat3c"
  },
  {
    "id": "subcat3ca",
    "name": "Poesía",
    "parent": "cat2b"
  },
  {
    "id": "subcat3cb",
    "name": "Poesía",
    "parent": "cat3c"
  },
  {
    "id": "subcat4da",
    "name": "Teatro",
    "parent": "cat2b"
  },
  {
    "id": "subcat4db",
    "name": "Teatro",
    "parent": "cat3c"
  },
  {
    "id": "subcat5ea",
    "name": "Ensayo",
    "parent": "cat2b"
  },
  {
    "id": "subcat5eb",
    "name": "Ensayo",
    "parent": "cat3c"
  },
  {
    "id": "subcat6a",
    "name": "De 0 a 3 años",
    "parent": "cat4d"
  },
  {
    "id": "subcat6b",
    "name": "De 4 a 10 años",
    "parent": "cat4d"
  },
  {
    "id": "subcat6c",
    "name": "De 11 a 18 años",
    "parent": "cat4d"
  },
  {
    "id": "subcat7a",
    "name": "Coleccionismo",
    "parent": "cat5e"
  },
  {
    "id": "subcat7b",
    "name": "De arte",
    "parent": "cat5e"
  },
  {
    "id": "subcat7c",
    "name": "De viajes",
    "parent": "cat5e"
  },
  {
    "id": "subcat7d",
    "name": "De naturaleza",
    "parent": "cat5e"
  },
  {
    "id": "subcat7e",
    "name": "De deportes",
    "parent": "cat5e"
  },
  {
    "id": "subcat8a",
    "name": "Generalistas",
    "parent": "cat6f"
  },
  {
    "id": "subcat8b",
    "name": "Específicos",
    "parent": "cat6f"
  },
  {
    "id": "subcat8c",
    "name": "De traducción",
    "parent": "cat6f"
  }
];


/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "categories"
 */
var getAllSubcategories = function () {
  return SUBCATEGORIES;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre una "subcategory"
 * específica a partir de la identificación de su atributo "id"
 */
var getSubcategoryById = function (id) {
  var filteredSubcategories = SUBCATEGORIES.filter(function (e) {
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
