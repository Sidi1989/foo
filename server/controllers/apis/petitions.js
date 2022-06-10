const {getAllPetitions, getPetitionById, createPetition, deletePetition} = require('../../models/petitions.js');




var apiCreatePetitionHandler = function (req, res) {
  var newPetitionInfo = {
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    subcategory: req.body.subcategory,
    language: req.body.language,
    shoppingLink: req.body.shoppingLink
  };
  var newPetition = createPetition(newPetitionInfo);

  var info = {
    status: "OK",
    petition: newPetition
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
  deletePetition(req.params.petition);

  var info = {
    status: "OK",
    petition: req.params.petition
  };
  return res.json(info);
};




exports.apiCreatePetitionHandler = apiCreatePetitionHandler;
exports.apiListPetitionsHandler = apiListPetitionsHandler;
exports.apiRetrievePetitionHandler = apiRetrievePetitionHandler;
exports.apiEditPetitionHandler = apiEditPetitionHandler;
exports.apiDeletePetitionHandler = apiDeletePetitionHandler;
