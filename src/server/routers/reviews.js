var express = require('express');
const {
  apiCreateReviewHandler,
  apiRetrieveReviewHandler,
  apiEditReviewHandler,
  apiDeleteReviewHandler
} = require('../controllers/apis/reviews.js');



var config = {};
var router = express.Router();

router.post('/', apiCreateReviewHandler);
router.get('/:review', apiRetrieveReviewHandler);
router.put('/:review', apiEditReviewHandler);
router.delete('/:review', apiDeleteReviewHandler);




exports.router = router;
