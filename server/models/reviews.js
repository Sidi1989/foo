const fs = require('fs');
const path = require('path');
const _ = require('lodash');
//const reviews = require('../../runtime/db/reviews.json');
const reviewsRelativeDirname = '../../runtime/db/reviews';
const reviewsAbsoluteDirname = path.join(__dirname, reviewsRelativeDirname);
const reviewsBasenames = fs.readdirSync(reviewsAbsoluteDirname);
const reviews = reviewsBasenames.map(function (e,i) {
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
  };

  return review;
};




exports.getAllReviews = getAllReviews;
exports.getReviewById = getReviewById;
