/*
const {getAllBooks, getBookById} = require('../models/books.js');
const {getAllMembers, getMemberById} = require('../models/members.js');
const {getCategoryById} = require('../models/categories.js');
const {getSubcategoryById} = require('../models/subcategories.js');
const {getLanguageById} = require('../models/languages.js');
const {getAuthorById} = require('../models/authors.js');
const {getAllCollections, getCollectionById} = require('../models/collections.js');
const {getAllPetitions, getPetitionById} = require('../models/petitions.js');
const {getAllReviews, getReviewById} = require('../models/reviews.js');




var apiCreateReviewHandler = function (req, res) {
  var reviewId = new Date();
  var info = {
    status: "OK",
    review: reviewId
  };
  return res.json(info);
};


var apiListReviewsHandler = function (req, res) {
  var reviews = getAllReviews();

  return res.json(reviews);
};


var apiRetrieveReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};


var apiEditReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};


var apiDeleteReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};




exports.apiCreateReviewHandler = apiCreateReviewHandler;
exports.apiListReviewsHandler = apiListReviewsHandler;
exports.apiRetrieveReviewHandler = apiRetrieveReviewHandler;
exports.apiEditReviewHandler = apiEditReviewHandler;
exports.apiDeleteReviewHandler = apiDeleteReviewHandler;
*/
