const express = require('express');
const {renderFile: ejsRenderEngine} = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');
const {auth, log} = require('./middleware/index.js');

const {router: booksRouter} = require ('./routers/books.js');
const {router: collectionsRouter} = require ('./routers/collections.js');
const {router: locationsRouter} = require ('./routers/locations.js');
const {router: membersRouter} = require ('./routers/members.js');
const {router: petitionsRouter} = require ('./routers/petitions.js');
const {router: reviewsRouter} = require ('./routers/reviews.js');
const {router: sessionsRouter} = require ('./routers/sessions.js');
const {landingHandler} = require('./controllers/pages/landing.js');
const {bookProfileHandler, bookSearchHandler} = require('./controllers/pages/books.js');
const {collectionEditHandler} = require('./controllers/pages/collections.js');
const {signInHandler, signUpHandler, memberProfileHandler, memberEditHandler} = require('./controllers/pages/members.js');




const app = express();
const port = process.argv[2] || 3004;
app.engine('html', ejsRenderEngine);
app.listen(port, function () {
  console.log(`Pinakes se escucha en el puerto ${port}`)
});

const publicDirname = path.join(__dirname, '../public');
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

app.use('/api/books', booksRouter);
app.use('/api/collections', collectionsRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/members', membersRouter);
app.use('/api/petitions', petitionsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/sessions', sessionsRouter);
