var express = require('express');
const {router: booksRouter} = require ('../routers/books.js');
const {router: collectionsRouter} = require ('../routers/collections.js');
const {router: locationsRouter} = require ('../routers/locations.js');
const {router: membersRouter} = require ('../routers/members.js');
const {router: petitionsRouter} = require ('../routers/petitions.js');
const {router: reviewsRouter} = require ('../routers/reviews.js');
const {router: sessionsRouter} = require ('../routers/sessions.js');
const {bookProfileHandler} = require('../controllers/pages/books.js');
const {collectionProfileHandler} = require('../controllers/pages/collections.js');
const {landingHandler} = require('../controllers/pages/landing.js');
const {
  signInHandler,
  signUpHandler,
  memberEditHandler,
  memberProfileHandler 
} = require('../controllers/pages/members.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las diferentes llamadas a que obliga la app en cada caso, según la ruta
  * y el modo en que tienen lugar.
  */
var config = {};
var dispatch = express.Router()

dispatch.use('/api/books', booksRouter);
dispatch.use('/api/collections', collectionsRouter);
dispatch.use('/api/locations', locationsRouter);
dispatch.use('/api/members', membersRouter);
dispatch.use('/api/petitions', petitionsRouter);
dispatch.use('/api/reviews', reviewsRouter);
dispatch.use('/api/sessions', sessionsRouter);

dispatch.get('/', landingHandler);
dispatch.get('/books/:book', bookProfileHandler);
dispatch.get('/auth/signin', signInHandler);
dispatch.get('/auth/signup', signUpHandler);
dispatch.get('/members/:member', memberProfileHandler);
dispatch.get('/members/:member/preferences', memberEditHandler);
dispatch.get('/members/:member/:collection', collectionProfileHandler);




exports.dispatch = dispatch;
