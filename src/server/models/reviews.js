const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');




var getAllReviews = function () {
  var type = 'review';
  var reviews = db.readPinakes(type);
  return reviews;
};


var getReviewById = function (id) {
  var type = 'review';
  var reviews = db.readPinakes(type);
  var filteredReviews = reviews.filter(function (e) {
    return (e.id == id);
  });

  var review;
  if (filteredReviews.length == 0) {
    review = null;
  } else {
    review = filteredReviews[0];
  }

  return review;
};


var createReview = function (info) {
  var type = 'review';
  var reviewId = `rev${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newReview = {
    id: reviewId,
    book: info.book,
    reviewer: info.reviewer,
    addingDate: date,
    bookRate: info.bookRate,
    copyRate: info.copyRate,
    comment: info.comment
  };
  db.writePinakes(type, reviewId, newReview);
  return newReview;
};


var deleteReview = function (reviewId) {
  var type = 'review';
  db.erasePinakes(type, reviewId)
  return reviewId
};




exports.getAllReviews = getAllReviews;
exports.getReviewById = getReviewById;
exports.createReview = createReview;
exports.deleteReview = deleteReview;
