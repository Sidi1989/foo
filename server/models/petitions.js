const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {v4: uuidv4} = require('uuid');

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
  }

  return petition;
};


var createPetition = function (info) {
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
  var newPetitionAsJson = JSON.stringify(newPetition, null, 2);
  var dirname = petitionsAbsoluteDirname;
  var basename = `${petitionId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newPetitionAsJson);

  return newPetition;
};


var deletePetition = function (petitionId) {
  var dirname = petitionsAbsoluteDirname;
  var basename = `${petitionId}.json`;
  var pathname = path.join(dirname, basename);
  fs.unlinkSync(pathname);

  return petitionId
};




exports.getAllPetitions = getAllPetitions;
exports.getPetitionById = getPetitionById;
exports.createPetition = createPetition;
exports.deletePetition = deletePetition;
