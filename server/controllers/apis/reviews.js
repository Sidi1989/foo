const {getAllReviews, getReviewById, createReview} = require('../../models/reviews.js');




var apiCreateReviewHandler = function (req, res) {
  var newReviewInfo = {
    reviewer: req.user.id,
    bookRate: req.body.bookRate,
    copyRate: req.body.copyRate,
    comment: req.body.comment
  };
  var newReview = createReview(newReviewInfo);

  var info = {
    status: "OK",
    member: newReview
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
