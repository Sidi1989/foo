const users = require('./../runtime/db/users.json');




var userhomeHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/userhome.html`;

  var filteredUsers = users.filter( (e) => {
    return (req.params.user == e.id)
  });

  if (filteredUsers.length == 0) {
    var info = {};
  } else {
    var info = filteredUsers[0];
  };

  res.render(pathname, info);
};




exports.userhomeHandler = userhomeHandler;
