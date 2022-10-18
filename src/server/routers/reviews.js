var express = require('express');
const {
  createReviewHandler,
  retrieveReviewHandler,
  editReviewHandler,
  deleteReviewHandler
} = require('../controllers/api/reviews.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las llamadas (relacionadas con "reviews") a que obliga la app en cada caso, 
  * según la ruta y el modo en que tienen lugar.
  */
var config = {};
var router = express.Router();

router.post('/', createReviewHandler);
router.get('/:review', retrieveReviewHandler);
router.put('/:review', editReviewHandler);
router.delete('/:review', deleteReviewHandler);




exports.router = router;
