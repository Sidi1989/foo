const users = require('../../runtime/db/users.json');




var getUserById = function (id) {
  var filteredUsers = users.filter(function (e) {
    return (e.id == id);
  });

  var user;
  if (filteredUsers.length == 0) {
    user = null;
  } else {
    user = filteredUsers[0];
  };

  return user;
};




exports.getUserById = getUserById;
