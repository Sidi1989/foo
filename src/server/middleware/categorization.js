const {getAllCategories} = require('../models/categories.js');
const {getAllSubcategories} = require('../models/subcategories.js');
const {getAllLanguages} = require('../models/languages.js');




/**
  * @description
  * función asíncrona con que, sin consultar la DB, recupera la información relativa
  * a las categorías, subcategorías e idiomasdesde sus models...
  */
var categorization = function (req, res, next) {
  req.categories = getAllCategories();
  req.subcategories = getAllSubcategories();
  req.languages = getAllLanguages();


  return next();
};




exports.categorization = categorization;
