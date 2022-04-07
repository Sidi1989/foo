const _ = require('lodash');

const {
  libro1: book1
} = require('./books');

const {libro1} = require('./books');

//var book1 = booklist.book1;

var books = [];
books.push(book1);

book1.saludar();
book1.presentarse();
book1.presentarseAnte(name);


//Parsing de los parámetros de entrada al programa. Mirar el bucle de abajo
var limit = parseInt(process.argv[2]);
var name = process.argv[3];

//Función Map
var titles = books.map(function (e, i, a) {
    return e.title;
  }
);
console.log(`Los títulos son: ${titles}`);

//Función Filter
var availableBooks = books.filter(function (e, i, a) {
    return e.isAvailable;
  }
);
availableBooks = books.filter(e => e.isAvailable)

var availableTitles = availableBooks.map(function (e) {
    return {
      title: e.title,
      author: e.author
    };
  }
);
console.log(availableTitles);



//Bucle en console.log
for (var a=1; a<limit; a++) {
  if (a<5) {
    console.log("Hola Mundo", name);
  } else if (a>=5 && a<8) {
    console.log("Hola España", name);
  } else {
    console.log("Hola Madrid", name);
  }
};
