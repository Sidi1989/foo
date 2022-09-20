const {getMemberBySession} = require('../models/members.js');




/**
 * Consulta la base de datos para encontrar al usuario al que en el pasado
 * (con un signIn) se le asignó su token identificativo
 */
var auth = function (req, res, next) {
  req.user = {};
  var member = getMemberBySession(req.cookies.session);
  if (member) {
    req.user.id = member.id;
  } else {
    req.user.id = null;
  }
  req.user.type = (member)? 'member' : 'guest';

  return next();
};




exports.auth = auth;
