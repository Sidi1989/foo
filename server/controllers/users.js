const users = require('./../runtime/db/users.json');





var userformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/userform.html`;
  var info;

  res.render(pathname, info);
};

var userprofileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/userprofile.html`;

  var filteredUsers = users.filter(function (e) {
    return (req.params.user == e.id)
  });

  var info;
  if (filteredUsers.length == 0) {
    info = {};
  } else {
    info = filteredUsers[0];
  };

  res.render(pathname, info);
};





exports.userformHandler = userformHandler;
exports.userprofileHandler = userprofileHandler;
