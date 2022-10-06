const _ = require('lodash');
const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');
const {db: nodeDB} = require('../connections/nodejsondb.js');
const {getAuthorById} = require('./authors');
const {getAllBooks, getBookById} = require('./books');
const {getCollectionById} = require('./collections');
const {getLocationById} = require('./locations');
const {getPetitionById} = require('./petitions');
const {getReviewById} = require('./reviews');




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
  * específico a partir de la identificación de su atributo "id"; contando además
  * con un segundo parámetro booleano, en función del cual la información sobre
  * el miembro será o no más completa, por recuperar en detalle el valor de sus
  * distintos atributos.
  */
var getMemberById = async function (id, populate) {
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

  if (populate == true) {
    var locationsMapped = member.locations.map(function (locationId) {
      var location = getLocationById(locationId);
      return location;
    });
    member.locations = locationsMapped;

    var reviewsMapped = member.reviews.map(function (reviewId) {
      var review = getReviewById(reviewId);
      return review;
      });
      reviewsMapped.forEach(function (e) {
        e.book = getBookById(e.book);
    });
    member.reviews = reviewsMapped;

    if (!member.collections) member.collections = [];
    var collectionsMapped = member.collections.map(function (collectionId) {
      var collection = getCollectionById(collectionId);
      var booksInEachCollection = collection.books.map(function (bookId) {
        var book = getBookById(bookId);
        return book;
      });
      collection.books = booksInEachCollection;
      booksInEachCollection.forEach(function (e) {
        e.author = getAuthorById(e.author);
      });
      return collection;
    });
    member.collections = collectionsMapped;

    if (!member.petitions) member.petitions = [];
    var petitionsMapped = member.petitions.map(function (petitionId) {
      var petition = getPetitionById(petitionId);
      return petition;
      });
      petitionsMapped.forEach(function (e) {
        e.author = getAuthorById(e.author);
    });
    member.petitions = petitionsMapped;

    if (!member.books) member.books = [];
    var booksMapped = member.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    booksMapped.forEach(function (e) {
      e.author = getAuthorById(e.author);
    });
    member.books = booksMapped;
  }

  return member;
};


/**
  * @description
  * función con que se obtiene de la DB la información sobre todos los libros,
  * para filtrar a continuación sólo aquellos cuyo atributo "owner" coincida con
  * el atributo "id" del miembro correspondiente (primer parámetro de la función).
  * Después, y de entre todos los posibles libros obtenidos, devolverá sólo el
  * último de ellos (ordenados en función de la fecha); contando además con un
  * segundo parámetro booleano, en función del cual la información sobre el mismo
  * será o no más completa, por recuperar en detalle el valor de sus distintos atributos.
  */
var getLastBookForMember = function (memberId, populate) {
  var books = getAllBooks();
  var memberBooks = books.filter(function (e) {
    return e.owner == memberId;
  });
  var sortedBooks = _.sortBy(memberBooks, 'addingDate');
  var lastBook = _.head(sortedBooks);
  if (!lastBook) lastBook = null;

  if (populate == true) {
    lastBook.author = getAuthorById(lastBook.author);
    if (lastBook.author == null) lastBook.author = {};

    lastBook.collection = getCollectionById(lastBook.collection);
    if (lastBook.collection == null) lastBook.collection = {};

    if (!lastBook.collection.books) lastBook.collection.books = [];
    var lastBookCollectionMapped = lastBook.collection.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    lastBook.collection.books = lastBookCollectionMapped;

    if (!lastBook.reviews) lastBook.reviews = [];
    var lastBookReviewsMapped = lastBook.reviews.map(async function (reviewId) {
      var review = getReviewById(reviewId);
      if (review.reviewer == null) {
        review.reviewer = {}
      } else {
        var reviewer = await getMemberById(review.reviewer);
        review.reviewer = reviewer;
      }
      return review;
    });
    lastBook.reviews = lastBookReviewsMapped;
  }

  return lastBook;
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
  db.erase(type, memberId);

  return memberId;
};




exports.getAllMembers = getAllMembers;
exports.getMemberBySession = getMemberBySession;
exports.getMemberById = getMemberById;
exports.getLastBookForMember = getLastBookForMember;
exports.createMember = createMember;
exports.deleteMember = deleteMember;
