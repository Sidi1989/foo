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




var apiCreatePetitionHandler = function (req, res) {
  var petitionId = new Date();
  var info = {
    status: "OK",
    petition: petitionId
  };
  return res.json(info);
};


var apiListPetitionsHandler = function (req, res) {
  var petitions = getAllPetitions();

  return res.json(petitions);
};


var apiRetrievePetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};


var apiEditPetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};


var apiDeletePetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};




exports.apiCreatePetitionHandler = apiCreatePetitionHandler;
exports.apiListPetitionsHandler = apiListPetitionsHandler;
exports.apiRetrievePetitionHandler = apiRetrievePetitionHandler;
exports.apiEditPetitionHandler = apiEditPetitionHandler;
exports.apiDeletePetitionHandler = apiDeletePetitionHandler;
*/
