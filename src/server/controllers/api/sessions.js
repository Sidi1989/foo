const {getAllMembers, getMemberBySession} = require('../../models/transfers.js');




/**
  * @description
  * handler para responder a la petición de crear una nueva sesión entre los
  * atributos de un miembro, una vez que el email y la contraseña proporcinados
  * en req.body se confirmen coincidentes con los datos de algún miembro; y de
  * manera que no sólo se identificará así al miembro para esa sesión, sino que
  * se actuará también en su información de la DB, almacenando el token que
  * hará referencia a la sesión concreta.
  */
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
  * @description
  * handler para responder a la petición de eliminar la información sobre una sesión
  * de un miembro (conocido a partir de su atributo session, recuperado desde
  * req.body.session); y de manera que el SignOut no sólo borrará las cookies,
  * sino que actuará también en la información de la DB sobre el miembro.
  */
var deleteSessionHandler = async function (req, res) {
  var member = await getMemberBySession(req.body.session);

  if (!member) {
    return res.json({
      status: 'KO'
    });
  } else {
    member.session = null;
    return res.json({
      status: 'OK'
    });
  }
};




exports.createSessionHandler = createSessionHandler;
exports.deleteSessionHandler = deleteSessionHandler;
