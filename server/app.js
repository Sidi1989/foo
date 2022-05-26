const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const {renderFile} = require('ejs');
const {bookNewHandler, bookProfileHandler, bookSearchHandler} = require('./controllers/books.js');
const {collectionEditHandler} = require('./controllers/collections.js');
const {signInHandler, signUpHandler, memberProfileHandler, memberEditHandler} = require('./controllers/members.js');

const {
  apiSignInHandler,
  apiCreateBookHandler,
  apiCreateCollectionHandler,
  apiListBooksHandler,
  apiRetrieveBookHandler,
  apiListCollectionsHandler
} = require('./controllers/api.js');




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

app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {
  req.user = {};
  req.user.id = req.cookies.user;
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

app.get('/api/books', apiListBooksHandler);
app.get('/api/books/:book', apiRetrieveBookHandler);
app.get('/api/collections', apiListCollectionsHandler);




app.listen(port, function () {
  console.log(`Pinakes se escucha en el port ${port}`)
})
