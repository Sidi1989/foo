/*
const {getAllBooks, getBookById} = require('../models/books.js');
const {getAllMembers, getMemberById} = require('../models/members.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getAllCollections, getCollectionById} = require('../models/collections.js');
const {getAllPetitions, getPetitionById} = require('../models/petitions.js');
const {getAllReviews, getReviewById} = require('../models/reviews.js');




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
*/
