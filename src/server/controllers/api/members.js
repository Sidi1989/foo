const {getAllMembers, getMemberById, createMember, deleteMember} = require('../../models/members.js');




/**
 * @description
 * función para listar todos los miembros, respondiendo a través de un json
 * con los mismos.
 */
var listMembersHandler = async function (req, res) {
  var members = await getAllMembers();

  return res.json(members);
};


/**
 * @description
 * handler para responder a la petición de la creación de un nuevo miembro,
 * a partir de los datos proporcionados en el req.body.
 */
var createMemberHandler = function (req, res) {
  var newMemberInfo = {
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password,
    name: {
      first: req.body.firstname,
      last: req.body.lastname
    },
    birthday: req.body.birthday,
    pic: req.body.pic
  };
  var newMember = createMember(newMemberInfo);

  var info = {
    status: "OK",
    member: newMember
  };

  return res.json(info);
};


/**
 * @description
 * handler para responder a la petición de recuperar la información almacenada
 * sobre un miembro concreto (conocido a partir de su id en req.params.member).
 */
var retrieveMemberHandler = async function (req, res) {
  var member = await getMemberById(req.params.member);

  return res.json(member);
};


/**
 * @description
 * handler para responder a la petición de modificar la información almacenada
 * sobre un miembro concreto (conocido a partir de su id en req.params.member).
 */
var editMemberHandler = function (req, res) {
  var member = getMemberById(req.params.member);

  return res.json(member);
};


/**
 * @description
 * handler para responder a la petición de eliminar la información almacenada
 * sobre un miembro concreto (conocido a partir de su id en req.params.member).
 */
var deleteMemberHandler = function (req, res) {
  deleteMember(req.params.member);

  var info = {
    status: "OK",
    member: req.params.member
  };
  
  return res.json(info);
};




exports.listMembersHandler = listMembersHandler;
exports.createMemberHandler = createMemberHandler;
exports.retrieveMemberHandler = retrieveMemberHandler;
exports.editMemberHandler = editMemberHandler;
exports.deleteMemberHandler = deleteMemberHandler;
