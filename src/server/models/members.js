const {v4: uuidv4} = require('uuid');
const _ = require('lodash');
const {db} = require('../connections/rawjson.js');
const {db: nodeDB} = require('../connections/nodejsondb.js');
const {getAllBooks} = require('./books');
const {getAllCollections} = require('./collections');




/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "members"
 */
var getAllMembers = async function () {
  const members = await nodeDB.read('member');
  return members;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre un "member"
 * específico a partir de la identificación de su atributo "session"
 */
var getMemberBySession = async function (session) {
  if (!session) return null;

  const members = await nodeDB.read('member');
  var filteredMembers = members.filter(function (e) {
    return (e.session == session);
  });

  var member;
  if (filteredMembers.length == 0) {
    member = null;
  } else {
    member = filteredMembers[0];
  }

  return member;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre un "member"
 * específico a partir de la identificación de su atributo "id"
 */
var getMemberById = async function (id) {
  const members = await nodeDB.read('member');
  var filteredMembers = members.filter(function (e) {
    return (e.id == id);
  });

  var member;
  if (filteredMembers.length == 0) {
    member = null;
  } else {
    member = filteredMembers[0];
  }

  return member;
};


/**
 * @description
 * función con que se obtiene de la DB la información sobre todos los libros,
 * para filtrar a continuación sólo aquellos cuyo atributo "owner" coincida con
 * el atributo "id" del miembro correspondiente (que es el parámetro de la función).
 * Y por último, de entre todos los posibles libros obtenidos, se obtiene su
 * ordenación en función de la fecha, devolviendo únicamente el último de ellos
 * según tal criterio
 */
var getLastBookForMember = function (memberId) {
  var books = getAllBooks();
  var memberBooks = books.filter(function (e) {
    return e.owner == memberId;
  });
  var sortedBooks = _.sortBy(memberBooks, 'addingDate');
  var lastBook = _.head(sortedBooks);

  if (!lastBook) lastBook = null;

  return lastBook
};


/**
 * @description
 * función con que se obtiene de la DB la información sobre todas las colecciones,
 * para filtrar a continuación sólo aquellas cuyo atributo "owner" coincida con
 * el atributo "id" del miembro correspondiente (que es el parámetro de la función)
 */
var getCollectionsForMember = function (memberId) {
  var collections = getAllCollections();
  var memberCollections = collections.filter(function (e) {
    return e.owner == memberId;
  });
  return memberCollections;
};


/**
 * @description
 * función para añadir un nuevo elemento al objeto "members" de la DB,
 * asignándole: un atributo "id" cuasialeatorio, un atributo "addingDate"
 * en función del momento en que tenga lugar la llamada de la función, y los demás
 * atributos en función de la información proporcionada al momento de dicha llamada
 */
var createMember = function (info) {
  var type = 'member';
  var memberId = `m${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newMember = {
    id: memberId,
    addingDate: date,
    nickname: info.nickname,
    email: info.email,
    password: info.password,
    name: info.name,
    birthday: info.birthday,
    pic: info.pic
  };
  db.write(type, memberId, newMember);
  return newMember;
};


/**
 * @description
 * función para eliminar un elemento del objeto "members" de la DB, identificado
 * por su atributo "id" (que es el parámetro de la función)
 */
var deleteMember = function (memberId) {
  var type = 'member';
  db.erase(type, memberId)
  return memberId
};




exports.getAllMembers = getAllMembers;
exports.getMemberBySession = getMemberBySession;
exports.getMemberById = getMemberById;
exports.getLastBookForMember = getLastBookForMember;
exports.getCollectionsForMember = getCollectionsForMember;
exports.createMember = createMember;
exports.deleteMember = deleteMember;
