const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');




var getAllPetitions = function () {
  var type = 'petition';
  var petitions = db.readPinakes(type);
  return petitions;
};


var getPetitionById = function (id) {
  var type = 'petition';
  var petitions = db.readPinakes(type);
  var filteredPetitions = petitions.filter(function (e) {
    return (e.id == id);
  });

  var petition;
  if (filteredPetitions.length == 0) {
    petition = null;
  } else {
    petition = filteredPetitions[0];
  }

  return petition;
};


var createPetition = function (info) {
  var type = 'petition';
  var petitionId = `pet${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newPetition = {
    id: petitionId,
    addingDate: date,
    title: info.title,
    author: info.author,
    category: info.category,
    subcategory: info.subcategory,
    language: info.language,
    shoppingLink: info.shoppingLink
  };
  db.writePinakes(type, petitionId, newPetition);
  return newPetition;
};


var deletePetition = function (petitionId) {
  var type = 'petition';
  db.erasePinakes(type, petitionId)
  return petitionId
};




exports.getAllPetitions = getAllPetitions;
exports.getPetitionById = getPetitionById;
exports.createPetition = createPetition;
exports.deletePetition = deletePetition;
