const collections = require('../../runtime/db/collections.json');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar una nueva colección para el usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var collectionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/collectionform.html`;
  var info = {};

  res.render(pathname, info);
};




exports.collectionformHandler = collectionformHandler;
