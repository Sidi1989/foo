const {getAllMembers, getMemberById} = require('../../models/members.js');




var apiCreateMemberHandler = function (req, res) {
  var memberId = new Date();
  var info = {
    status: "OK",
    member: memberId
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
