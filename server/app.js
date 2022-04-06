const express = require("express");
const templates = require('./templates')
const {bookTemplate} = require('./templates')
//Lo de arriba es como si ae tuviera esto -> var bookTemplate = templates.bookTemplate

const app = express();
const port = process.argv[2] || 3000;
var helloHandler = function (req, res) {
  res.send("Hello");
}


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/hello', helloHandler);

var bookhandler = function (req, res) {
  res.send(templates.bookTemplate);
}



app.get('/books/:book', bookhandler);

app.get('/foo', (req, res) => {
  var saludo = `hola ${req.query.name}, `;
  const city = 'estoy en madrid';
  var mystring = saludo + city;
  mystring += ' y hace frío';
  res.send(mystring)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
