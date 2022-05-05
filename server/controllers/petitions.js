const {getUserById} = require('../models/users.js');
const {getAllCategories} = require('../models/categories.js');
const {getAllSubcategories} = require('../models/subcategories.js');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar una nueva petición de libro para Pinakes
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var petitionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/petitionform.html`;

  var user = getUserById(req.params.user);

  var info = {};
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var bookCategories = getAllCategories();
  info.bookCategories = bookCategories;

  var bookSubcategories = getAllSubcategories();
  info.bookSubcategories = bookSubcategories;


  res.render(pathname, info);
};




exports.petitionformHandler = petitionformHandler;
