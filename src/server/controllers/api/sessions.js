const {v4: uuidv4} = require('uuid');
const {getAllMembers} = require('../../models/members.js');




var apiSignInHandler = function (req, res) {
  var members = getAllMembers();
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
    //Almacenar token en base de datos asociada al usuario
    return res.json({
      status: 'OK',
      session: token,
      member: {
        id: member.id
      }
    });
  }
};




exports.apiSignInHandler = apiSignInHandler;
