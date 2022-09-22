/**
* @description
* función destinada a cubrir la petición de Landing de la app
*
* @param req contiene la información de la petición
* @param res contiene la renderización de la petición para el cliente
*/

var landingHandler = function (req, res) {
  if (req.user.type == 'member') {
    res.redirect(`/members/${req.user.id}`);
    return
  }
  var pathname = `${__dirname}/../../../views/pages/landing.ejs`;
  var info = {};


  res.render(pathname, info);
};




exports.landingHandler = landingHandler;
