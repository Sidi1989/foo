const {getReviewById, createReview, deleteReview} = require('../../models/reviews.js');
const {getBookById} = require('../../models/books.js');
const {getMemberById} = require('../../models/members.js');




/**
 * @description
 * función para listar todas las reviews de un miembro determinado (conocido
 * a partir de su id en req.params.member), obteniendo además el valor concreto de
 * los distintos atributos del libro en cada una referido; y respondiendo a través
 * de un json con las mismas.
 */
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


/**
 * @description
 * handler para responder a la petición de la creación de una nueva review,
 * a partir de los datos proporcionados en el req.body.
 */
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


/**
 * @description
 * handler para responder a la petición de recuperar la información almacenada
 * sobre una review concreta (conocida a partir de su id en req.params.review).
 */
var retrieveReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};


/**
 * @description
 * handler para responder a la petición de modificar la información almacenada
 * sobre una review concreta (conocida a partir de su id en req.params.review).
 */
var editReviewHandler = function (req, res) {
  var review = getReviewById(req.params.review);

  return res.json(review);
};


/**
 * @description
 * handler para responder a la petición de eliminar la información almacenada
 * sobre una review concreta (conocida a partir de su id en req.params.review).
 */
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
