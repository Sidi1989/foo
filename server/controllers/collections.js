const {getUserById} = require('../models/users.js');
const {getCollectionById} = require('../models/collections.js');





/**
 * @description
 * Función destinada a cubrir la petición de Registrar una nueva colección para el usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var collectionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/views/collectionform.html`;

  var user = getUserById(req.params.user);

  var info = {};
  if (user == null) {
    info.user = {};
  } else {
    info.user = user;
  };

  var userCollections = user.collections.map(function (e) {
    var eachCollection = getCollectionById(e);
    return eachCollection;
  });

  info.userCollections = userCollections;

  res.render(pathname, info);
};




exports.collectionformHandler = collectionformHandler;
