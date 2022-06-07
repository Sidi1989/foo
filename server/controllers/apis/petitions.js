const {getAllPetitions, getPetitionById} = require('../../models/petitions.js');




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
