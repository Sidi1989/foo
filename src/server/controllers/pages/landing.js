/**
* @description
* handler destinado a cubrir la petición del Landing de la app; pero de manera que
* comprueba si el req.user.type (conocido desde el middleware "auth") corresponde
* al de un miembro, para redirigirlo directamente en tal caso hacia su propia página
* de perfil, sin renderizar el landing común a todos los usuarios.
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
