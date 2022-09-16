/**
* @description
* función destinada a cubrir la petición de... Búsqueda de un libro
* (cualquiera que los miembros no reserven para "sólo vista privada")
*
* @param req contiene la información de la petición
* @param res contiene la renderización de la petición para el cliente
*/


var landingHandler = function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/landing.ejs`;
  var info = {};

  res.render(pathname, info)
};




exports.landingHandler = landingHandler;
