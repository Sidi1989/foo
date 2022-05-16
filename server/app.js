const fs = require('fs');
const path = require('path');
const express = require('express');
const {renderFile} = require('ejs');
const {bookformHandler, booksearchHandler, bookprofileHandler} = require('./controllers/books.js');
const {collectionformHandler, collectionprofileHandler} = require('./controllers/collections.js');
const {petitionformHandler} = require('./controllers/petitions.js');
const {userformHandler, userloginHandler, userprofileHandler, useraccountHandler} = require('./controllers/users.js');

const {apiBooksHandler} = require('./controllers/api.js');




const app = express();
const port = process.argv[2] || 3004;

app.engine('html', renderFile);

app.use(function (req, res, next) {
  console.log(req.originalUrl);
  return next();
});

const options = {};
const publicDirname = path.join(__dirname, '../Pinakes');
app.use('/public', express.static(publicDirname, options));

app.get('/books/new', bookformHandler);
app.get('/books/search', booksearchHandler);
app.get('/books/:book', bookprofileHandler);
app.get('/auth', userloginHandler);
app.get('/auth/new', userformHandler);
app.get('/users/:user', userprofileHandler);
app.get('/users/:user/account', useraccountHandler);
app.get('/users/:user/collections/new', collectionformHandler);
app.get('/users/:user/collections/:collection', collectionprofileHandler);
app.get('/users/:user/petitions/new', petitionformHandler);

app.get('/api/books', apiBooksHandler);




app.listen(port, function () {
  console.log(`Pinakes se escucha en el port ${port}`)
})
