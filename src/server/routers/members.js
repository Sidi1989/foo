var express = require('express');
const {
  apiListMembersHandler,
  apiCreateMemberHandler,
  apiRetrieveMemberHandler,
  apiEditMemberHandler,
  apiDeleteMemberHandler
} = require('../controllers/api/members.js');
const {apiListBooksHandler} = require('../controllers/api/books.js');
const {apiListCollectionsHandler} = require('../controllers/api/collections.js');
const {apiListLocationsHandler} = require('../controllers/api/locations.js');
const {apiListPetitionsHandler} = require('../controllers/api/petitions.js');
const {apiListReviewsHandler} = require('../controllers/api/reviews.js');




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
