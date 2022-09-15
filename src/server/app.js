const express = require('express');
const {renderFile: ejsRenderEngine} = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');

const {auth, log} = require('./middleware/index.js');
const {landingHandler} = require('./controllers/pages/landing.js');
const {bookProfileHandler, bookSearchHandler} = require('./controllers/pages/books.js');
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
app.engine('html', ejsRenderEngine);
app.listen(port, function () {
  console.log(`Pinakes se escucha en el puerto ${port}`)
});

const publicDirname = path.join(__dirname, '../views');
const options = {};
app.use('/public', express.static(publicDirname, options));

app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing json
app.use(express.urlencoded({ extended: true })); // for parsing x-www-form-urlencoded
app.use(auth); // for authenticate users, with cookies
app.use(log); // fot logging requests

app.get('/', function (req, res) {
  if (req.user.type == 'guest') {
    res.redirect('/landing');
  } else {
    res.redirect(`/members/${req.user.id}`);
  }
});

app.get('/landing', landingHandler);

app.get('/books/search', bookSearchHandler);
app.get('/books/:book', bookProfileHandler);

app.get('/auth/signin', signInHandler);
app.get('/auth/signup', signUpHandler);

app.get('/members/:member', memberProfileHandler);
app.get('/members/:member/preferences', memberEditHandler);
app.get('/members/:member/:collection', collectionEditHandler);

app.post('/api/sessions', apiSignInHandler);

app.post('/api/members', apiCreateMemberHandler);
app.get('/api/members', apiListMembersHandler);
app.get('/api/members/:member/books', apiListBooksHandler);
app.get('/api/members/:member/collections', apiListCollectionsHandler);
app.get('/api/members/:member/locations', apiListLocationsHandler);
app.get('/api/members/:member/petitions', apiListPetitionsHandler);
app.get('/api/members/:member/reviews', apiListReviewsHandler);
app.get('/api/members/:member', apiRetrieveMemberHandler);
app.put('/api/members/:member', apiEditMemberHandler);
app.delete('/api/members/:member', apiDeleteMemberHandler);

app.post('/api/books', apiCreateBookHandler);
app.get('/api/books/:book', apiRetrieveBookHandler);
app.put('/api/books/:book', apiEditBookHandler);
app.delete('/api/books/:book', apiDeleteBookHandler);

app.post('/api/collections', apiCreateCollectionHandler);
app.get('/api/collections/:collection', apiRetrieveCollectionHandler);
app.put('/api/collections/:collection', apiEditCollectionHandler);
app.delete('/api/collections/:collection', apiDeleteCollectionHandler);

app.post('/api/locations', apiCreateLocationHandler);
app.get('/api/locations/:location', apiRetrieveLocationHandler);
app.put('/api/locations/:location', apiEditLocationHandler);
app.delete('/api/locations/:location', apiDeleteLocationHandler);

app.post('/api/petitions', apiCreatePetitionHandler);
app.get('/api/petitions/:petition', apiRetrievePetitionHandler);
app.put('/api/petitions/:petition', apiEditPetitionHandler);
app.delete('/api/petitions/:petition', apiDeletePetitionHandler);

app.post('/api/reviews', apiCreateReviewHandler);
app.get('/api/reviews/:review', apiRetrieveReviewHandler);
app.put('/api/reviews/:review', apiEditReviewHandler);
app.delete('/api/reviews/:review', apiDeleteReviewHandler);
