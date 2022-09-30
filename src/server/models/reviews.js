const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');




/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "reviews"
 */
var getAllReviews = function () {
  var type = 'review';
  var reviews = db.read(type);
  return reviews;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre una "review"
 * específica a partir de la identificación de su atributo "id"
 */
var getReviewById = function (id) {
  var type = 'review';
  var reviews = db.read(type);
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


/**
 * @description
 * función para añadir un nuevo elemento al objeto "reviews" de la DB,
 * asignándole: un atributo "id" cuasialeatorio, un atributo "addingDate"
 * en función del momento en que tenga lugar la llamada de la función, y los demás
 * atributos en función de la información proporcionada al momento de dicha llamada
 */
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
  db.write(type, reviewId, newReview);
  return newReview;
};


/**
 * @description
 * función para eliminar un elemento del objeto "reviews" de la DB, identificado
 * por su atributo "id" (que es el parámetro de la función)
 */
var deleteReview = function (reviewId) {
  var type = 'review';
  db.erase(type, reviewId)
  return reviewId
};




exports.getAllReviews = getAllReviews;
exports.getReviewById = getReviewById;
exports.createReview = createReview;
exports.deleteReview = deleteReview;
