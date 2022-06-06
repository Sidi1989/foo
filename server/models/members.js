const fs = require('fs');
const path = require('path');
const _ = require('lodash');
//const members = require('../../runtime/db/members.json');
const membersRelativeDirname = '../../runtime/db/members';
const membersAbsoluteDirname = path.join(__dirname, membersRelativeDirname);
const membersBasenames = fs.readdirSync(membersAbsoluteDirname);
const members = membersBasenames.map(function (e) {
  var pathname = path.join(membersAbsoluteDirname, e);
  var member = require(pathname);
  return member;
});
const {getAllBooks} = require('./books');




var getAllMembers = function () {
  return _.cloneDeep(members);
};


var getMemberById = function (id) {
  var clonedMembers = _.cloneDeep(members);
  var filteredMembers = clonedMembers.filter(function (e) {
    return (e.id == id);
  });

  var member;
  if (filteredMembers.length == 0) {
    member = null;
  } else {
    member = filteredMembers[0];
  }

  return member;
};


/**
 * @description
 *
 * @param member String. Identificador del miembro
 */
var getLastBookForMember = function (member) {
  var books = getAllBooks();
  var memberBooks = books.filter(function (e) {
    return e.owner == member;
  });
  var sortedBooks = _.sortBy(memberBooks, 'addingDate');
  var lastBook = _.head(sortedBooks);

  return lastBook
};




exports.getAllMembers = getAllMembers;
exports.getMemberById = getMemberById;
exports.getLastBookForMember = getLastBookForMember;
