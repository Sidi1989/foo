const _ = require('lodash');
//const booklist = require('./books');
const {
  libro1: book1,
  libro2: book2
} = require('./books');

const {libro1, libro2} = require('./books');
//Esto ahora mismo no funcionaría, porque crearía dos variables llamadas "libro" y no "book"

//Parsing de los parámetros de entrada al programa
var limit = parseInt(process.argv[2]);
var name = process.argv[3];


//var book1 = booklist.book1;
//var book2 = booklist.book2;


var books = [];
books.push(book1);
books.push(book2);


book1.saludar();
book1.presentarse();
book1.presentarseAnte(name);



var titles = books.map(function (e, i, a) {
    return e.title;
  }
)

console.log(`Los títulos son: ${titles}`);


var availableBooks = books.filter(function (e, i, a) {
    return e.isAvailable;
  }
)
availableBooks = books.filter(e => e.isAvailable)
availableBooks = books.filter((e) => {return e.isAvailable})


var availableTitles = availableBooks.map(function (e) {
    return {
      title: e.title,
      author: e.author
    };
  }
)

console.log(availableTitles);


for (var a=1; a<limit; a++) {
  if (a<5) {
    console.log("Hola Mundo", name);
  } else if (a>=5 && a<8) {
    console.log("Hola España", name);
  } else {
    console.log("Hola Madrid", name);
  }
}
