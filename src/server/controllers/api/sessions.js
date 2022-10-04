const {v4: uuidv4} = require('uuid');
const {getAllMembers, getMemberBySession} = require('../../models/members.js');




var createSessionHandler = async function (req, res) {
  var members = await getAllMembers();
  var filteredMembers = members.filter(function (e) {
    return (req.body.email == e.email)
  });

  if (filteredMembers.length == 0) {
    return res.json({
      status: 'KO',
      message: 'Credenciales inválidas'
    });
  }
  var member = filteredMembers[0];

  if (member.password != req.body.password) {
    return res.json({
      status: 'KO',
      message: 'Credenciales inválidas'
    });
  } else {
    // @TODO
    //var token = `session${uuidv4().slice(0,3)}`;
    var token = 'session501';
    //Se tendría que almacenar el token en el json del miembro identificado
    return res.json({
      status: 'OK',
      session: token,
      member: {
        id: member.id
      }
    });
  }
};


/**
 * Para que signOut no sólo borre cookies, sino que también hace un delete
 * en la DB del miembro.
 * Habría que eliminar de la base de datos la información de la sesión del member
 */
var deleteSessionHandler = async function (req, res) {
  var member = await getMemberBySession(req.body.session);
  var info;
  if (!member) {
    info = {
      status: "KO"
    };
    return res.json(info);
  } else {
    member.session = null
    info = {
      status: "OK"
    };
    return res.json(info);
  }
};



exports.createSessionHandler = createSessionHandler;
exports.deleteSessionHandler = deleteSessionHandler;
