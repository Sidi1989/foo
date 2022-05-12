const {getUserById} = require('../models/users.js');
const {getPetitionById} = require('../models/petitions.js');
const {getAllCategories} = require('../models/categories.js');
const {getAllSubcategories} = require('../models/subcategories.js');
const {getAllLanguages} = require('../models/languages.js');




/**
 * @description
 * Función destinada a cubrir la petición de Mostrar la Configuración de una Petición concreta
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var petitionprofileHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/petitionprofile.html`;

  var info = {};

  var user = getUserById(req.params.user);

  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var petition = getPetitionById(req.params.petition);

  if (petition == null) {
    info.petition = {};
  } else {
    info.petition = petition;
  };


  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Registrar una nueva petición de libro para Pinakes
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var petitionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/petitionform.html`;

  var info = {};

  var user = getUserById(req.params.user);

  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var categories = getAllCategories();
  info.categories = categories;

  var subcategories = getAllSubcategories();
  info.subcategories = subcategories;

  var languages = getAllLanguages();
  info.languages = languages;


  res.render(pathname, info);
};




exports.petitionprofileHandler = petitionprofileHandler;
exports.petitionformHandler = petitionformHandler;
