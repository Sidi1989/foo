const fs = require('fs');
const express = require("express");
const {bookTemplate} = require('./templates')




const app = express();
const port = process.argv[2] || 3000;


app.get('/', (req, res) => {
  res.send('I am root')
});


var helloHandler = function (req, res) {
  res.send("Hello");
};
app.get('/hello', helloHandler);


var bookhandler = function (req, res) {
  res.send(bookTemplate);
};
app.get('/books/:book', bookhandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
