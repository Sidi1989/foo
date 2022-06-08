const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {v4: uuidv4} = require('uuid');
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


var createMember = function (info) {
  var memberId = `m${uuidv4().slice(0,3)}`;
  var newMember = {
    id: memberId,
    clientAge: 38,
    nickname: info.nickname,
    name: {
      first: info.first,
      last: info.last
    },
    email: info.email,
    password: info.password,
    birthday: {
      dd: info.dd,
      mm: info.mm,
      yyyy: info.yyyy
    },
    pic: info.pic
  };
  var newMemberAsJson = JSON.stringify(newMember, null, 2);
  var dirname = membersAbsoluteDirname;
  var basename = `${memberId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newMemberAsJson);

  return newMember;
};




exports.getAllMembers = getAllMembers;
exports.getMemberById = getMemberById;
exports.getLastBookForMember = getLastBookForMember;
exports.createMember = createMember;
