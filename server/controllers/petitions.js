const collections = require('../../runtime/db/petitions.json');




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

  res.render(pathname, info);
};




exports.petitionformHandler = petitionformHandler;
