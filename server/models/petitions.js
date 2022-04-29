const petitions = require('../../runtime/db/petitions.json');



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

  return petition;
};




exports.getPetitionById = getPetitionById;
