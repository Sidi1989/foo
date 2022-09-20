const {getReviewById, createReview, deleteReview} = require('../../models/reviews.js');
const {getMemberById} = require('../../models/members.js');
const {getBookById} = require('../../models/books.js');




var listMemberReviewsHandler = function (req, res) {
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


var createReviewHandler = function (req, res) {
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


var retrieveReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};


var editReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};


var deleteReviewHandler = function (req, res) {
  deleteReview(req.params.review);

  var info = {
    status: "OK",
    review: req.params.review
  };
  return res.json(info);
};




exports.listMemberReviewsHandler = listMemberReviewsHandler;
exports.createReviewHandler = createReviewHandler;
exports.retrieveReviewHandler = retrieveReviewHandler;
exports.editReviewHandler = editReviewHandler;
exports.deleteReviewHandler = deleteReviewHandler;
