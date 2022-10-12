const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');
const {db: nodeDB} = require('../connections/nodejsondb.js');




/**
  * @description
  * función con que se obtiene desde la DB todo el objeto "collections"
  */
var getAllCollections = async function () {
  const collections = await nodeDB.read('collection');

  return collections;
};


/**
  * @description
  * función con que se filtra y obtiene la información de la DB sobre una "collection"
  * específica a partir de la identificación de su atributo "id".
  * Previéndose además que el collection.name sea 'Sin Colección' cuando (id == null)
  */
var getCollectionById = async function (id) {
  const collections = await nodeDB.read('collection');

  var collection;
  if (id == null) {
    collection = {};
    collection.name = "Libros sin Colección";
    return collection;
  }

  var filteredCollections = collections.filter(function (e) {
    return (e.id == id);
  });

  if (filteredCollections.length == 0) {
    collection = null;
  } else {
    collection = filteredCollections[0];
  }

  return collection;
};


/**
  * @description
  * función para añadir un nuevo elemento al objeto "collections" de la DB,
  * asignándole: un atributo "id" cuasialeatorio, un atributo "addingDate"
  * en función del momento en que tenga lugar la llamada de la función, y los demás
  * atributos en función de la información proporcionada al momento de dicha llamada
  */
var createCollection = async function (info) {

  // Creación de la nueva Colección
  var type = 'collection';
  var collectionId = `col${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newCollection = {
    id: collectionId,
    owner: info.owner,
    addingDate: date,
    name: info.name,
    pic: info.pic
  };
  await nodeDB.append(type, newCollection);

  /* Asignación al miembro
  var allMembers = db.read('member');
  var memberIndex = allMembers.findIndex(function(e) {
    return e.id == newCollection.owner;
  })
  await nodeDB.write('member', `${memberIndex}`, newCollection);
*/
  return newCollection;
};


/**
  * @description
  * función para eliminar un elemento del objeto "collections" de la DB, identificado
  * por su atributo "id" (que es el parámetro de la función)
  */
var deleteCollection = function (collectionId) {
  var type = 'collection';
  db.erase(type, collectionId);

  return collectionId;
};




exports.getAllCollections = getAllCollections;
exports.getCollectionById = getCollectionById;
exports.createCollection = createCollection;
exports.deleteCollection = deleteCollection;
