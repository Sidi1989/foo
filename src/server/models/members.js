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
    if (!member.collections) member.collections = [];
    var collectionsMapped = [];
    for (var collectionId of member.collections) {
      var collection = await getCollectionById(collectionId);

      var booksInEachCollection = [];
      for (var bookInCollectionId of collection.books) {
        var bookInCollection = await getBookById(bookInCollectionId);
        booksInEachCollection.push(bookInCollection);

        for (var e of booksInEachCollection) {
          e.author = await getAuthorById(e.author);
        }
      }
      collection.books = booksInEachCollection;

      collectionsMapped.push(collection);
    }
    member.collections = collectionsMapped;

    if (!member.books) member.books = [];
    var booksMapped = [];
    for (var bookId of member.books) {
      var book = await getBookById(bookId);
      booksMapped.push(book);
    }
    for (var b of booksMapped) {
      b.author = await getAuthorById(b.author);
    }
    member.books = booksMapped;

    if (!member.petitions) member.petitions = [];
    var petitionsMapped = [];
    for (var petitionId of member.petitions) {
      var petition = await getPetitionById(petitionId);
      petitionsMapped.push(petition);
    }
    for (var pet of petitionsMapped) {
      pet.author = await getAuthorById(pet.author);
    }
    member.petitions = petitionsMapped;

    var reviewsMapped = [];
    for (var reviewId of member.reviews) {
      var review = await getReviewById(reviewId);
      reviewsMapped.push(review);
    }
    for (var rev of reviewsMapped) {
        rev.book = await getBookById(rev.book);
    }
    member.reviews = reviewsMapped;

    var locationsMapped = [];
    for (var locationId of member.locations) {
      var location = await getLocationById(locationId);
      locationsMapped.push(location);
    }
    member.locations = locationsMapped;
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
var getLastBookForMember = async function (memberId, populate) {
  var books = await getAllBooks();
  var memberBooks = books.filter(function (e) {
    return e.owner == memberId;
  });

  var sortedBooks = _.sortBy(memberBooks, 'addingDate');
  var lastBook = _.head(sortedBooks);
  if (!lastBook) lastBook = null;

  if (populate == true) {
    lastBook.author = await getAuthorById(lastBook.author);
    if (lastBook.author == null) lastBook.author = {};

    lastBook.collection = await getCollectionById(lastBook.collection);
    if (lastBook.collection == null) lastBook.collection = {};

    if (!lastBook.collection.books) lastBook.collection.books = [];
    var lastBookCollectionMapped = [];
    for (var bookId of lastBook.collection.books) {
      var book = await getBookById(bookId);
      lastBookCollectionMapped.push(book)
    }
    lastBook.collection.books = lastBookCollectionMapped;

    if (!lastBook.reviews) lastBook.reviews = [];
    var lastBookReviewsMapped = [];
    for (var reviewId of lastBook.reviews) {
      var review = await getReviewById(reviewId);
      if (review.reviewer == null) {
        review.reviewer = {}
      } else {
        var reviewer = await getMemberById(review.reviewer);
        review.reviewer = reviewer;
      }
      lastBookReviewsMapped.push(review);
    }
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
