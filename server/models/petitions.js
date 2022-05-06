const _ = require('lodash');
const petitions = require('../../runtime/db/petitions.json');




var getAllPetitions = function () {
  return _.cloneDeep(petitions);
};


var getPetitionById = function (id) {
  var filteredPetitions = petitions.filter(function (e) {
    return (e.id == id);
  });

  var petition;
  if (filteredPetitions.length == 0) {
    petition = null;
  } else {
    petition = filteredPetitions[0];
  };

  return _.cloneDeep(petition);
};




exports.getAllPetitions = getAllPetitions;
exports.getPetitionById = getPetitionById;
