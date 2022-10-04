const {getMemberBySession} = require('../models/members.js');



/**
  * @description
  * función asíncrona con que se consulta la DB para encontrar al usuario al que,
  * a través de su SignIn, se le asignó un token identificativo de la sesión;
  * discriminando en función de ello entre miembros e invitados (sin dicho token).
  */
var auth = async function (req, res, next) {
  req.user = {};
  var member = await getMemberBySession(req.cookies.session);
  if (member) {
    req.user.id = member.id;
  } else {
    req.user.id = null;
  }
  req.user.type = (member)? 'member' : 'guest';

  return next();
};




exports.auth = auth;
