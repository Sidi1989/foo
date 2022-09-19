var express = require('express');
const {router: booksRouter} = require ('../routers/books.js');
const {router: collectionsRouter} = require ('../routers/collections.js');
const {router: locationsRouter} = require ('../routers/locations.js');
const {router: membersRouter} = require ('../routers/members.js');
const {router: petitionsRouter} = require ('../routers/petitions.js');
const {router: reviewsRouter} = require ('../routers/reviews.js');
const {router: sessionsRouter} = require ('../routers/sessions.js');
const {landingHandler} = require('../controllers/pages/landing.js');
const {bookProfileHandler, bookSearchHandler} = require('../controllers/pages/books.js');
const {collectionEditHandler} = require('../controllers/pages/collections.js');
const {signInHandler, signUpHandler, memberProfileHandler, memberEditHandler} = require('../controllers/pages/members.js');




var config ={};
var router = express.Router()

router.use('/api/books', booksRouter);
router.use('/api/collections', collectionsRouter);
router.use('/api/locations', locationsRouter);
router.use('/api/members', membersRouter);
router.use('/api/petitions', petitionsRouter);
router.use('/api/reviews', reviewsRouter);
router.use('/api/sessions', sessionsRouter);

router.get('/', function (req, res) {
  if (req.user.type == 'guest') {
    res.redirect('/landing');
  } else {
    res.redirect(`/members/${req.user.id}`);
  }
});

router.get('/landing', landingHandler);

router.get('/books/search', bookSearchHandler);
router.get('/books/:book', bookProfileHandler);

router.get('/auth/signin', signInHandler);
router.get('/auth/signup', signUpHandler);

router.get('/members/:member', memberProfileHandler);
router.get('/members/:member/preferences', memberEditHandler);
router.get('/members/:member/:collection', collectionEditHandler);




exports.router = router;
