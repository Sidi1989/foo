const {getMemberBySession} = require('../models/members.js');




/**
 * Consultar base de datos para encontrar al usuario al que en el pasado
 * (con un signIn) se le asignó dicho token
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

  req.book = {};
  req.book.id = req.cookies.book;
  return next();
};




exports.auth = auth;
