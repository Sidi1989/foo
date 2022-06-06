const {getAllBooks, getBookById} = require('../models/books.js');
const {getAllMembers, getMemberById} = require('../models/members.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getAllCollections, getCollectionById} = require('../models/collections.js');
const {getAllPetitions, getPetitionById} = require('../models/petitions.js');
const {getAllReviews, getReviewById} = require('../models/reviews.js');




var apiSignInHandler = function (req, res) {

  var members = getAllMembers();
  var filteredMembers = members.filter(function (e) {
    return (req.body.email == e.email)
  });

  if (filteredMembers.length == 0) {
    return res.json({
      status: 'KO',
      message: 'Credenciales inválidas'
    });
  };

  var member = filteredMembers[0];
  if (member.password == req.body.password) {
    return res.json({
      status: 'OK',
      id: member.id,
      session: new Date()
    });
  } else {
    return res.json({
      status: 'KO',
      message: 'Credenciales inválidas'
    });
  }
};


var apiCreateBookHandler = function (req, res) {
  var bookId = new Date();
  var info = {
    status: "OK",
    book: bookId
  };
  return res.json(info);
};

var apiCreateCollectionHandler = function (req, res) {
  var collectionId = new Date();
  var info = {
    status: "OK",
    collection: collectionId
  };
  return res.json(info);
};

var apiCreatePetitionHandler = function (req, res) {
  var petitionId = new Date();
  var info = {
    status: "OK",
    petition: petitionId
  };
  return res.json(info);
};

var apiCreateReviewHandler = function (req, res) {
  var reviewId = new Date();
  var info = {
    status: "OK",
    review: reviewId
  };
  return res.json(info);
};

var apiCreateMemberHandler = function (req, res) {
  var memberId = new Date();
  var info = {
    status: "OK",
    member: memberId
  };
  return res.json(info);
};


var apiListBooksHandler = function (req, res) {
  var books = getAllBooks();

  books.forEach(function (e) {
    e.category = getCategoryById(e.category);
  });
  books.forEach(function (e) {
    e.subcategory = getSubcategoryById(e.subcategory);
  });
  books.forEach(function (e) {
    e.author = getAuthorById(e.author);
  });
  books.forEach(function (e) {
    e.language = getLanguageById(e.language);
  });
  books.forEach(function (e) {
    e.collection = getCollectionById(e.collection);
  });

  return res.json(books);
};

var apiListCollectionsHandler = function (req, res) {
  var collections = getAllCollections();

  return res.json(collections);
};

var apiListPetitionsHandler = function (req, res) {
  var petitions = getAllPetitions();

  return res.json(petitions);
};

var apiListReviewsHandler = function (req, res) {
  var reviews = getAllReviews();

  return res.json(reviews);
};

var apiListMembersHandler = function (req, res) {
  var members = getAllMembers();

  return res.json(members);
};


var apiRetrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};

var apiRetrieveCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};

var apiRetrievePetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};

var apiRetrieveReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};

var apiRetrieveMemberHandler = function (req, res) {
  var member = getMemberById(req.params.member);

  return res.json(member);
};


var apiEditBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};

var apiEditCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};

var apiEditPetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};

var apiEditReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};

var apiEditMemberHandler = function (req, res) {
  var member = getMemberById(req.params.member);

  return res.json(member);
};


var apiDeleteBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};

var apiDeleteCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};

var apiDeletePetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};

var apiDeleteReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};

var apiDeleteMemberHandler = function (req, res) {
  var member = getMemberById(req.params.member);

  return res.json(member);
};


exports.apiSignInHandler = apiSignInHandler;

exports.apiCreateBookHandler = apiCreateBookHandler;
exports.apiCreateCollectionHandler = apiCreateCollectionHandler;
exports.apiCreatePetitionHandler = apiCreatePetitionHandler;
exports.apiCreateReviewHandler = apiCreateReviewHandler;
exports.apiCreateMemberHandler = apiCreateMemberHandler;

exports.apiListBooksHandler = apiListBooksHandler;
exports.apiListCollectionsHandler = apiListCollectionsHandler;
exports.apiListPetitionsHandler = apiListPetitionsHandler;
exports.apiListReviewsHandler = apiListReviewsHandler;
exports.apiListMembersHandler = apiListMembersHandler;

exports.apiRetrieveBookHandler = apiRetrieveBookHandler;
exports.apiRetrieveCollectionHandler = apiRetrieveCollectionHandler;
exports.apiRetrievePetitionHandler = apiRetrievePetitionHandler;
exports.apiRetrieveReviewHandler = apiRetrieveReviewHandler;
exports.apiRetrieveMemberHandler = apiRetrieveMemberHandler;

exports.apiEditBookHandler = apiEditBookHandler;
exports.apiEditCollectionHandler = apiEditCollectionHandler;
exports.apiEditPetitionHandler = apiEditPetitionHandler;
exports.apiEditReviewHandler = apiEditReviewHandler;
exports.apiEditMemberHandler = apiEditMemberHandler;

exports.apiDeleteBookHandler = apiDeleteBookHandler;
exports.apiDeleteCollectionHandler = apiDeleteCollectionHandler;
exports.apiDeletePetitionHandler = apiDeletePetitionHandler;
exports.apiDeleteReviewHandler = apiDeleteReviewHandler;
exports.apiDeleteMemberHandler = apiDeleteMemberHandler;
