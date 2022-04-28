const fs = require('fs');
const express = require('express');
const {renderFile} = require('ejs');
const {bookformHandler, booksearchHandler, bookprofileHandler} = require('./controllers/books.js');
const {collectionformHandler} = require('./controllers/collections.js');
const {petitionformHandler} = require('./controllers/petitions.js');
const {userformHandler, userloginHandler, userprofileHandler} = require('./controllers/users.js');




const app = express();
const port = process.argv[2] || 3004;

app.engine('html', renderFile);

app.get('/books/new', bookformHandler);
app.get('/books/search', booksearchHandler);
app.get('/books/:book', bookprofileHandler);
app.get('/collections/new', collectionformHandler);
app.get('/petitions/new', petitionformHandler);
app.get('/auth', userloginHandler);
app.get('/auth/new', userformHandler);
app.get('/users/:user', userprofileHandler);



app.listen(port, () => {
  console.log(`Pinakes se escucha en el port ${port}`)
})
