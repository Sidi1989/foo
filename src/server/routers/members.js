var express = require('express');
const {
  apiListMembersHandler,
  apiCreateMemberHandler,
  apiRetrieveMemberHandler,
  apiEditMemberHandler,
  apiDeleteMemberHandler
} = require('../controllers/apis/members.js');
const {apiListBooksHandler} = require('../controllers/apis/books.js');
const {apiListCollectionsHandler} = require('../controllers/apis/collections.js');
const {apiListLocationsHandler} = require('../controllers/apis/locations.js');
const {apiListPetitionsHandler} = require('../controllers/apis/petitions.js');
const {apiListReviewsHandler} = require('../controllers/apis/reviews.js');




var config = {};
var router = express.Router();

router.post('/', apiCreateMemberHandler);
router.get('/:member', apiRetrieveMemberHandler);
router.put('/:member', apiEditMemberHandler);
router.delete('/:member', apiDeleteMemberHandler);

router.get('/', apiListMembersHandler);
router.get('/:member/books', apiListBooksHandler);
router.get('/:member/collections', apiListCollectionsHandler);
router.get('/:member/locations', apiListLocationsHandler);
router.get('/:member/petitions', apiListPetitionsHandler);
router.get('/:member/reviews', apiListReviewsHandler);




exports.router = router;
