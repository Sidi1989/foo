const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');
const {db: nodeDB} = require('../connections/nodejsondb.js');
const {getBookById} = require('./books');




/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "locations"
  */
var getAllLocations = async function () {
  const locations = await nodeDB.read('location');

  return locations;
};


/**
  * @description
  * función con que se filtra y obtiene la información de la DB sobre una "location"
  * específica a partir de la identificación de su atributo "id"
  */
var getLocationById = async function (id, populate) {
  const locations = await nodeDB.read('location');
  var filteredLocations = locations.filter(function (e) {
    return (e.id == id);
  });

  var location;
  if (filteredLocations.length == 0) {
    location = null;
  } else {
    location = filteredLocations[0];
  }

  if (populate == true) {
    // Libros de la Sede
    if (!location.books) location.books = [];
    var booksInLocation = [];
    for (let bookId of location.books) {
      let book = await getBookById(bookId, true);
      booksInLocation.push(book);
    }
    location.books = booksInLocation;
  }

  return location;
};


/**
  * @description
  * función para añadir un nuevo elemento al objeto "locations" de la DB,
  * asignándole: un atributo "id" cuasialeatorio, un atributo "addingDate"
  * en función del momento en que tenga lugar la llamada de la función, y los demás
  * atributos en función de la información proporcionada al momento de dicha llamada
  */
var createLocation = function (info) {
  var type = 'location';
  var locationId = `loc${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newLocation = {
    id: locationId,
    owner: info.owner,
    addingDate: date,
    name: info.name,
    pic: info.pic
  };
  db.write(type, locationId, newLocation);

  return newLocation;
};


/**
  * @description
  * función para eliminar un elemento del objeto "locations" de la DB, identificado
  * por su atributo "id" (que es el parámetro de la función)
  */
var deleteLocation = function (locationId) {
  var type = 'location';
  db.erase(type, locationId);

  return locationId;
};




exports.getAllLocations = getAllLocations;
exports.getLocationById = getLocationById;
exports.createLocation = createLocation;
exports.deleteLocation = deleteLocation;
