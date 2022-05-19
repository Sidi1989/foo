const _ = require('lodash');
const users = require('../../runtime/db/users.json');




var getAllUsers = function () {
  return _.cloneDeep(users);
};


var getUserById = function (id) {
  var clonedUsers = _.cloneDeep(users);
  var filteredUsers = clonedUsers.filter(function (e) {
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




exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
