const {getReviewById, createReview, deleteReview} = require('../../models/reviews.js');
const {getMemberById} = require('../../models/members.js');
const {getBookById} = require('../../models/books.js');




var apiCreateReviewHandler = function (req, res) {
  var newReviewInfo = {
    reviewer: req.user.id,
    book: req.book.id,
    bookRate: Number(req.body.bookRate),
    copyRate: Number(req.body.copyRate),
    comment: req.body.comment
  };
  var newReview = createReview(newReviewInfo);

  var info = {
    status: "OK",
    review: newReview
  };
  return res.json(info);
};


var apiListReviewsHandler = function (req, res) {
  var member = getMemberById(req.params.member);
  var memberReviews = member.reviews.map(function (reviewId) {
    var review = getReviewById(reviewId);
    return review;
  });

  memberReviews.forEach(function (e) {
    e.book = getBookById(e.book);
  });

  return res.json(memberReviews);
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
  deleteReview(req.params.review);

  var info = {
    status: "OK",
    review: req.params.review
  };
  return res.json(info);
};




exports.apiCreateReviewHandler = apiCreateReviewHandler;
exports.apiListReviewsHandler = apiListReviewsHandler;
exports.apiRetrieveReviewHandler = apiRetrieveReviewHandler;
exports.apiEditReviewHandler = apiEditReviewHandler;
exports.apiDeleteReviewHandler = apiDeleteReviewHandler;
