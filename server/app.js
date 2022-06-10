const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const {renderFile} = require('ejs');
const {bookNewHandler, bookProfileHandler, bookSearchHandler} = require('./controllers/pages/books.js');
const {collectionEditHandler} = require('./controllers/pages/collections.js');
const {signInHandler, signUpHandler, memberProfileHandler, memberEditHandler} = require('./controllers/pages/members.js');

const {apiSignInHandler} = require('./controllers/apis/sessions.js');

const {
  apiCreateBookHandler,
  apiListBooksHandler,
  apiRetrieveBookHandler,
  apiEditBookHandler,
  apiDeleteBookHandler
} = require('./controllers/apis/books.js');

const {
  apiCreateCollectionHandler,
  apiListCollectionsHandler,
  apiRetrieveCollectionHandler,
  apiEditCollectionHandler,
  apiDeleteCollectionHandler
} = require('./controllers/apis/collections.js');

const {
  apiCreateLocationHandler,
  apiListLocationsHandler,
  apiRetrieveLocationHandler,
  apiEditLocationHandler,
  apiDeleteLocationHandler
} = require('./controllers/apis/locations.js');

const {
  apiCreateMemberHandler,
  apiListMembersHandler,
  apiRetrieveMemberHandler,
  apiEditMemberHandler,
  apiDeleteMemberHandler
} = require('./controllers/apis/members.js');

const {
  apiCreatePetitionHandler,
  apiListPetitionsHandler,
  apiRetrievePetitionHandler,
  apiEditPetitionHandler,
  apiDeletePetitionHandler
} = require('./controllers/apis/petitions.js');

const {
  apiCreateReviewHandler,
  apiListReviewsHandler,
  apiRetrieveReviewHandler,
  apiEditReviewHandler,
  apiDeleteReviewHandler
} = require('./controllers/apis/reviews.js');


const app = express();
const port = process.argv[2] || 3004;

app.engine('html', renderFile);

const options = {};
const publicDirname = path.join(__dirname, '../Pinakes');
app.use('/public', express.static(publicDirname, options));

app.use(function (req, res, next) {
  console.log(req.originalUrl);
  return next();
});

app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing json
app.use(express.urlencoded({ extended: true })); // for parsing x-www-form-urlencoded

app.use(function (req, res, next) {
  req.user = {};
  req.user.type = (req.cookies.session)? 'member' : 'guest';
  req.user.id = req.cookies.session || null;
  req.book = {};
  req.book.id = req.cookies.book;
  return next();
});


app.get('/books/new', bookNewHandler);
app.get('/books/search', bookSearchHandler);
app.get('/books/:book', bookProfileHandler);
app.get('/auth/signin', signInHandler);
app.get('/auth/signup', signUpHandler);
app.get('/members/:member', memberProfileHandler);
app.get('/members/:member/preferences', memberEditHandler);
app.get('/members/:member/:collection', collectionEditHandler);

app.post('/api/sessions', apiSignInHandler);

app.post('/api/books', apiCreateBookHandler);
app.post('/api/collections', apiCreateCollectionHandler);
app.post('/api/locations', apiCreateLocationHandler);
app.post('/api/members', apiCreateMemberHandler);
app.post('/api/petitions', apiCreatePetitionHandler);
app.post('/api/reviews', apiCreateReviewHandler);

app.get('/api/books', apiListBooksHandler);
app.get('/api/collections', apiListCollectionsHandler);
app.get('/api/locations', apiListLocationsHandler);
app.get('/api/members', apiListMembersHandler);
app.get('/api/petitions', apiListPetitionsHandler);
app.get('/api/reviews', apiListReviewsHandler);

app.get('/api/books/:book', apiRetrieveBookHandler);
app.get('/api/collections/:collection', apiRetrieveCollectionHandler);
app.get('/api/locations/:location', apiRetrieveLocationHandler);
app.get('/api/members/:member', apiRetrieveMemberHandler);
app.get('/api/petitions/:petition', apiRetrievePetitionHandler);
app.get('/api/reviews/:review', apiRetrieveReviewHandler);

app.put('/api/books/:book', apiEditBookHandler);
app.put('/api/collections/:collection', apiEditCollectionHandler);
app.put('/api/locations/:location', apiEditLocationHandler);
app.put('/api/members/:member', apiEditMemberHandler);
app.put('/api/petitions/:petition', apiEditPetitionHandler);
app.put('/api/reviews/:review', apiEditReviewHandler);

app.delete('/api/books/:book', apiDeleteBookHandler);
app.delete('/api/collections/:collection', apiDeleteCollectionHandler);
app.delete('/api/locations/:location', apiDeleteLocationHandler);
app.delete('/api/members/:member', apiDeleteMemberHandler);
app.delete('/api/petitions/:petition', apiDeletePetitionHandler);
app.delete('/api/reviews/:review', apiDeleteReviewHandler);

app.listen(port, function () {
  console.log(`Pinakes se escucha en el port ${port}`)
});
