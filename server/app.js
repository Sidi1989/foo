const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const {renderFile} = require('ejs');
const {bookformHandler, booksearchHandler, bookprofileHandler} = require('./controllers/books.js');
const {collectionformHandler, collectionprofileHandler} = require('./controllers/collections.js');
const {petitionformHandler} = require('./controllers/petitions.js');
const {userformHandler, userloginHandler, userprofileHandler, useraccountHandler} = require('./controllers/users.js');

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


app.get('/books/new', bookformHandler);
app.get('/books/search', booksearchHandler);
app.get('/books/:book', bookprofileHandler);
app.get('/signin', userloginHandler);
app.get('/signup', userformHandler);
app.get('/users/:user', userprofileHandler);
app.get('/users/:user/account', useraccountHandler);
app.get('/users/:user/:collection', collectionprofileHandler);
app.get('/users/:user/petitions/new', petitionformHandler);

app.get('/api/books', apiBooksHandler);




app.listen(port, function () {
  console.log(`Pinakes se escucha en el port ${port}`)
})
