const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');
const _ = require('lodash');
const {members} = require('../connections/rawjson.js');

const {getAllBooks} = require('./books');
const {getAllCollections} = require('./collections');




var getAllMembers = function () {
  return _.cloneDeep(members);
};


var getMemberBySession = function (session) {
  if (!session) return null;

  var clonedMembers = _.cloneDeep(members);
  var filteredMembers = clonedMembers.filter(function (e) {
    return (e.session == session);
  });

  var member;
  if (filteredMembers.length == 0) {
    member = null;
  } else {
    member = filteredMembers[0];
  }

  return member;
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
 * En el supuesto de que el usuario carezca de libros, devuelve undefined
 **/
var getLastBookForMember = function (memberId) {
  var books = getAllBooks();
  var memberBooks = books.filter(function (e) {
    return e.owner == memberId;
  });
  var sortedBooks = _.sortBy(memberBooks, 'addingDate');
  var lastBook = _.head(sortedBooks);

  if (!lastBook) lastBook = null;

  return lastBook
};


var getCollectionsForMember = function (memberId) {
  var collections = getAllCollections();
  var memberCollections = collections.filter(function (e) {
    return e.owner == memberId;
  });
  return memberCollections;
};


var createMember = function (info) {
  var memberId = `m${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newMember = {
    id: memberId,
    addingDate: date,
    nickname: info.nickname,
    email: info.email,
    password: info.password,
    name: info.name,
    birthday: info.birthday,
    pic: info.pic
  };
  var newMemberAsJson = JSON.stringify(newMember, null, 2);
  var dirname = membersAbsoluteDirname;
  var basename = `${memberId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newMemberAsJson);

  return newMember;
};


var deleteMember = function (memberId) {
  var dirname = membersAbsoluteDirname;
  var basename = `${memberId}.json`;
  var pathname = path.join(dirname, basename);
  fs.unlinkSync(pathname);

  return memberId
};



exports.getAllMembers = getAllMembers;
exports.getMemberBySession = getMemberBySession;
exports.getMemberById = getMemberById;
exports.getLastBookForMember = getLastBookForMember;
exports.getCollectionsForMember = getCollectionsForMember;
exports.createMember = createMember;
exports.deleteMember = deleteMember;
