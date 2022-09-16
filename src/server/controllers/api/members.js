const {getAllMembers, getMemberById, createMember, deleteMember} = require('../../models/members.js');




var apiCreateMemberHandler = function (req, res) {
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


var apiListMembersHandler = function (req, res) {
  var members = getAllMembers();

  return res.json(members);
};


var apiRetrieveMemberHandler = function (req, res) {
  var member = getMemberById(req.params.member);

  return res.json(member);
};


var apiEditMemberHandler = function (req, res) {
  var member = getMemberById(req.params.member);

  return res.json(member);
};


var apiDeleteMemberHandler = function (req, res) {
  deleteMember(req.params.member);

  var info = {
    status: "OK",
    member: req.params.member
  };
  return res.json(info);
};




exports.apiCreateMemberHandler = apiCreateMemberHandler;
exports.apiListMembersHandler = apiListMembersHandler;
exports.apiRetrieveMemberHandler = apiRetrieveMemberHandler;
exports.apiEditMemberHandler = apiEditMemberHandler;
exports.apiDeleteMemberHandler = apiDeleteMemberHandler;
