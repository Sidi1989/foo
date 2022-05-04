const reviews = require('../../runtime/db/reviews.json');




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

  return reviews;
};




exports.getReviewById = getReviewById;
