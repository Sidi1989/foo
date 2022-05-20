const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const {renderFile} = require('ejs');
const {bookNewHandler, bookSearchHandler, bookProfileHandler} = require('./controllers/books.js');
const {collectionEditHandler} = require('./controllers/collections.js');
const {memberSignUpHandler, memberSignInHandler, memberProfileHandler, memberEditHandler} = require('./controllers/members.js');

const {apiBooksHandler} = require('./controllers/api.js');




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

app.use(function (req, res, next) {
  res.cookie('user', 'u1a');
  return next();
});

app.use(function (req, res, next) {
  req.user = {};
  req.user.id = req.cookies.user;
  return next();
});


app.get('/books/new', bookNewHandler);
app.get('/books/search', bookSearchHandler);
app.get('/books/:book', bookProfileHandler);
app.get('/auth/signin', memberSignInHandler);
app.get('/auth/signup', memberSignUpHandler);
app.get('/members/:member', memberProfileHandler);
app.get('/members/:member/preferences', memberEditHandler);
app.get('/members/:member/:collection', collectionEditHandler);

app.get('/api/books', apiBooksHandler);




app.listen(port, function () {
  console.log(`Pinakes se escucha en el port ${port}`)
})
