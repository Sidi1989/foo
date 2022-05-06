const _ = require('lodash');
const reviews = require('../../runtime/db/reviews.json');




var getAllReviews = function () {
  return _.cloneDeep(reviews);
};


var getReviewById = function (id) {
  var filteredReviews = reviews.filter(function (e) {
    return (e.id == id);
  });

  var review;
  if (filteredReviews.length == 0) {
    review = null;
  } else {
    review = filteredReviews[0];
  };

  return _.cloneDeep(review);
};




exports.getAllReviews = getAllReviews;
exports.getReviewById = getReviewById;
