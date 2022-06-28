const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {v4: uuidv4} = require('uuid');

const reviewsRelativeDirname = '../../../runtime/db/reviews';
const reviewsAbsoluteDirname = path.join(__dirname, reviewsRelativeDirname);
const reviewsBasenames = fs.readdirSync(reviewsAbsoluteDirname);
const reviews = reviewsBasenames.map(function (e) {
  var pathname = path.join(reviewsAbsoluteDirname, e);
  var review = require(pathname);
  return review;
});




var getAllReviews = function () {
  return _.cloneDeep(reviews);
};


var getReviewById = function (id) {
  var clonedReviews = _.cloneDeep(reviews);
  var filteredReviews = clonedReviews.filter(function (e) {
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
  var newReviewAsJson = JSON.stringify(newReview, null, 2);
  var dirname = reviewsAbsoluteDirname;
  var basename = `${reviewId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newReviewAsJson);

  return newReview;
};


var deleteReview = function (reviewId) {
  var dirname = reviewsAbsoluteDirname;
  var basename = `${reviewId}.json`;
  var pathname = path.join(dirname, basename);
  fs.unlinkSync(pathname);

  return reviewId
};




exports.getAllReviews = getAllReviews;
exports.getReviewById = getReviewById;
exports.createReview = createReview;
exports.deleteReview = deleteReview;
