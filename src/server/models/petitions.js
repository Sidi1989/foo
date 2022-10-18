const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');
const {db: nodeDB} = require('../connections/nodejsondb.js');
const {getSubcategoryById} = require('./subcategories');
const {getCategoryById} = require('./categories');
const {getLanguageById} = require('./languages');
const {getAuthorById} = require('./authors');




/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "petitions"
  */
var getAllPetitions = async function () {
  const petitions = await nodeDB.read('petition');

  return petitions;
};


/**
  * @description
  * función con que se filtra y obtiene la información de la DB sobre una "petition"
  * específica a partir de la identificación de su atributo "id"
  */
var getPetitionById = async function (id) {
  const petitions = await nodeDB.read('petition');
  var filteredPetitions = petitions.filter(function (e) {
    return (e.id == id);
  });

  var petition;
  if (filteredPetitions.length == 0) {
    petition = {};
  } else {
    petition = filteredPetitions[0];
  }

  // Autor de la Petición
  petition.author = await getAuthorById(petition.author);
  if (petition.author == null) petition.author = {};
  // Idioma de la Petición
  petition.language = getLanguageById(petition.language);
  if (petition.language == null) petition.language = {};
  // Categoría de la Petición
  petition.category = getCategoryById(petition.category);
  if (petition.category == null) petition.category = {};
  // Subcategoría dela Petición
  petition.subcategory = getSubcategoryById(petition.subcategory);
  if (petition.subcategory == null) petition.subcategory = {};

  return petition;
};


/**
  * @description
  * función para añadir un nuevo elemento al objeto "petitions" de la DB,
  * asignándole: un atributo "id" cuasialeatorio, un atributo "addingDate"
  * en función del momento en que tenga lugar la llamada de la función, y los demás
  * atributos en función de la información proporcionada al momento de dicha llamada
  */
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
  db.write(type, petitionId, newPetition);

  return newPetition;
};


/**
  * @description
  * función para eliminar un elemento del objeto "petitions" de la DB, identificado
  * por su atributo "id" (que es el parámetro de la función)
  */
var deletePetition = function (petitionId) {
  var type = 'petition';
  db.erase(type, petitionId);

  return petitionId;
};




exports.getAllPetitions = getAllPetitions;
exports.getPetitionById = getPetitionById;
exports.createPetition = createPetition;
exports.deletePetition = deletePetition;
