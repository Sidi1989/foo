const fs = require('fs');
const path = require('path');
const _ = require('lodash');
//const petitions = require('../../runtime/db/petitions.json');
const petitionsRelativeDirname = '../../runtime/db/petitions';
const petitionsAbsoluteDirname = path.join(__dirname, petitionsRelativeDirname);
const petitionsBasenames = fs.readdirSync(petitionsAbsoluteDirname);
const petitions = petitionsBasenames.map(function (e) {
  var pathname = path.join(petitionsAbsoluteDirname, e);
  var petition = require(pathname);
  return petition;
});




var getAllPetitions = function () {
  return _.cloneDeep(petitions);
};


var getPetitionById = function (id) {
  var clonedPetitions = _.cloneDeep(petitions);
  var filteredPetitions = clonedPetitions.filter(function (e) {
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




exports.getAllPetitions = getAllPetitions;
exports.getPetitionById = getPetitionById;
