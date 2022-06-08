const {getAllPetitions, getPetitionById, createPetition} = require('../../models/petitions.js');




var apiCreatePetitionHandler = function (req, res) {
  var newPetitionInfo = {
    title: req.body.title,
    author: req.body.title,
    category: req.body.title,
    subcategory: req.body.title,
    language: req.body.title
  };
  var newPetition = createPetition(newPetitionInfo);

  var info = {
    status: "OK",
    member: newPetition
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
