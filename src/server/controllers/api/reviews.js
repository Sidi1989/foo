const {getReviewById, createReview, deleteReview, getMemberById} = require('../../models/transfers.js');




/**
  * @description
  * función para listar todas las reviews de un miembro determinado (conocido
  * a partir de su id en req.params.member), obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con las mismas.
  */
var listMemberReviewsHandler = async function (req, res) {
  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  }

  return res.json(member.reviews);
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
