const {getAllMembers, getMemberById, createMember} = require('../../models/members.js');




var apiCreateMemberHandler = function (req, res) {
  var newMemberInfo = {
    nickname: req.body.nickname,
    name: {
      first: req.body.first,
      last: req.body.last
    },
    email: req.body.email,
    password: req.body.password,
    birthday: {
      dd: req.body.dd,
      mm: req.body.mm,
      yyyy: req.body.yyyy
    },
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
  var member = getMemberById(req.params.member);

  return res.json(member);
};




exports.apiCreateMemberHandler = apiCreateMemberHandler;
exports.apiListMembersHandler = apiListMembersHandler;
exports.apiRetrieveMemberHandler = apiRetrieveMemberHandler;
exports.apiEditMemberHandler = apiEditMemberHandler;
exports.apiDeleteMemberHandler = apiDeleteMemberHandler;
