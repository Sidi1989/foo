const {getUserById} = require('../models/users.js');
const {getCategoryById} = require('../models/categories.js')




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

  res.render(pathname, info);
};




exports.petitionformHandler = petitionformHandler;
