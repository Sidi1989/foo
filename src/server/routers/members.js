var express = require('express');
const {
  listMembersHandler,
  createMemberHandler,
  retrieveMemberHandler,
  editMemberHandler,
  deleteMemberHandler
} = require('../controllers/api/members.js');
const {listMemberBooksHandler} = require('../controllers/api/books.js');
const {listMemberCollectionsHandler} = require('../controllers/api/collections.js');
const {listMemberLocationsHandler} = require('../controllers/api/locations.js');
const {listMemberPetitionsHandler} = require('../controllers/api/petitions.js');
const {listMemberReviewsHandler} = require('../controllers/api/reviews.js');




var config = {};
var router = express.Router();

router.get('/', listMembersHandler);
router.post('/', createMemberHandler);
router.get('/:member', retrieveMemberHandler);
router.put('/:member', editMemberHandler);
router.delete('/:member', deleteMemberHandler);
router.get('/:member/books', listMemberBooksHandler);
router.get('/:member/collections', listMemberCollectionsHandler);
router.get('/:member/locations', listMemberLocationsHandler);
router.get('/:member/petitions', listMemberPetitionsHandler);
router.get('/:member/reviews', listMemberReviewsHandler);




exports.router = router;
