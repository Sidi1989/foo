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




var config = {};
var dispatch = express.Router()

dispatch.use('/api/books', booksRouter);
dispatch.use('/api/collections', collectionsRouter);
dispatch.use('/api/locations', locationsRouter);
dispatch.use('/api/members', membersRouter);
dispatch.use('/api/petitions', petitionsRouter);
dispatch.use('/api/reviews', reviewsRouter);
dispatch.use('/api/sessions', sessionsRouter);

dispatch.get('/', function (req, res) {
  if (req.user.type == 'guest') {
    res.redirect('/landing');
  } else {
    res.redirect(`/members/${req.user.id}`);
  }
});

dispatch.get('/landing', landingHandler);
dispatch.get('/books/search', bookSearchHandler);
dispatch.get('/books/:book', bookProfileHandler);
dispatch.get('/auth/signin', signInHandler);
dispatch.get('/auth/signup', signUpHandler);
dispatch.get('/members/:member', memberProfileHandler);
dispatch.get('/members/:member/preferences', memberEditHandler);
dispatch.get('/members/:member/:collection', collectionEditHandler);




exports.dispatch = dispatch;
