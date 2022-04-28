const users = require('../../runtime/db/users.json');




/**
 * @description
 * Función destinada a cubrir la petición de Registrar a un nuevo usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/userform.html`;
  var info = {};

  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Login de un usuario
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userloginHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/userlogin.html`;
  var info = {};

  res.render(pathname, info);
};


/**
 * @description
 * Función destinada a cubrir la petición de Mostrar el Home de un usuario concreto
 *
 * @param req Contiene la información de la petición
 * @param res Contiene la renderización de la petición para el cliente
 */
var userprofileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/userprofile.html`;

  var filteredUsers = users.filter(function (e) {
    return (req.params.user == e.id)
  });

  var info = {};
  if (filteredUsers.length == 0) {
    info.user = {};
  } else {
    info.user = filteredUsers[0];
  };

  res.render(pathname, info);
};




exports.userformHandler = userformHandler;
exports.userloginHandler = userloginHandler;
exports.userprofileHandler = userprofileHandler;
