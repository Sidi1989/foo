var express = require('express');
const {
  createReviewHandler,
  retrieveReviewHandler,
  editReviewHandler,
  deleteReviewHandler
} = require('../controllers/api/reviews.js');




var config = {};
var router = express.Router();

router.post('/', createReviewHandler);
router.get('/:review', retrieveReviewHandler);
router.put('/:review', editReviewHandler);
router.delete('/:review', deleteReviewHandler);




exports.router = router;
