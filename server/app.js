const fs = require('fs');
const path = require('path');
const express = require('express');
const {renderFile} = require('ejs');
const {bookformHandler, booksearchHandler, bookprofileHandler} = require('./controllers/books.js');
const {collectionformHandler} = require('./controllers/collections.js');
const {petitionformHandler} = require('./controllers/petitions.js');
const {userformHandler, userloginHandler, userprofileHandler} = require('./controllers/users.js');




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
app.get('/collections/new', collectionformHandler);
app.get('/petitions/new', petitionformHandler);
app.get('/auth', userloginHandler);
app.get('/auth/new', userformHandler);
app.get('/users/:user', userprofileHandler);

//Añadir criba de colecciones a collectionform
//Crear los bucles de los géneros en bookform y petitionform
//Problema en bookprofile con sede y reviews
//Rutas public de header y footer, y problema con footer


app.listen(port, function () {
  console.log(`Pinakes se escucha en el port ${port}`)
})
