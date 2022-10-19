// Estructura básica de Handlers referido a views y no apis
var bookdetailHandler = function (req, res) {
  var pathname = `${__dirname}/../Pinakes/html/bookdetail.html`;

// Filter con resultado único esperado
  var filteredBooks = books.filter( (e) => {
    return (req.params.book == e.id)
  });
  if (filteredBooks.length == 0) {
    var info = {};
  } else {
    var info = filteredBooks[0];
  }

// Varios "ifs" encadenados
  if (req.params.book == '1') {
    var info =  books[0];
  } else if (req.params.book == '2') {
    var info =  books[1];
  } else {
    var info =  books[2];
  }
  res.render(pathname, info);
};
app.get('/books/:book', bookdetailHandler);

// Varios "ifs" = sintaxis switch-case
var info = {};
  switch (req.params.book) {
    case '1':
      var info = {};
    case '2':
      var info = {};
    default:
      var info = {}
  }
  res.render(pathname, info);
};
app.get('/users/:user', userhomeHandler);
