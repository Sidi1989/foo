const {getAllBooks, getBookById, createBook, deleteBook} = require('../../models/books.js');
const {getMemberById} = require('../../models/members.js');




/**
  * @description
  * función para listar todos los libros, obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con los mismos.
  */
var listBooksHandler = async function (req, res) {
  var books = await getAllBooks(true);

  return res.json(books);
};


/**
  * @description
  * función para listar todos los libros de un miembro determinado (conocido a partir
  * de su id en req.params.member), obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con los mismos.
  */
var listMemberBooksHandler = async function (req, res) {
  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  }

  return res.json(member.books);
};


/**
  * @description
  * handler para responder a la petición de la creación de un nuevo libro,
  * a partir de los datos proporcionados en el req.body.
  */
var createBookHandler = function (req, res) {
  var newBookInfo = {
    owner: req.user.id,
    collection: req.body.collection,
    location: req.body.location,
    title: req.body.title,
    author: req.body.author,
    synopsis: req.body.synopsis,
    pages: Number(req.body.pages),
    dimensions: {
      length: Number(req.body.lengthDimension),
      width: Number(req.body.widthDimension)
    },
    format: req.body.format,
    editorial: req.body.editorial,
    publishDate: Number(req.body.publishDate),
    issue: Number(req.body.issue),
    isbn: req.body.isbn,
    category: req.body.category,
    subcategory: req.body.subcategory,
    language: req.body.language,
    pic: req.body.pic
  };
  var newBook = createBook(newBookInfo);

  var info = {
    status: "OK",
    book: newBook
  };

  return res.json(info);
};


/**
  * @description
  * handler para responder a la petición de recuperar la información almacenada
  * sobre un libro concreto (conocido a partir de su id en req.params.book).
  */
var retrieveBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


/**
  * @description
  * handler para responder a la petición de modificar la información almacenada
  * sobre un libro concreto (conocido a partir de su id en req.params.book).
  */
var editBookHandler = function (req, res) {
  var book = getBookById(req.params.book);

  return res.json(book);
};


/**
  * @description
  * handler para responder a la petición de eliminar la información almacenada
  * sobre un libro concreto (conocido a partir de su id en req.params.book).
  */
var deleteBookHandler = function (req, res) {
  deleteBook(req.params.book);

  var info = {
    status: "OK",
    book: req.params.book
  };

  return res.json(info);
};




exports.listBooksHandler = listBooksHandler;
exports.listMemberBooksHandler = listMemberBooksHandler;
exports.createBookHandler = createBookHandler;
exports.retrieveBookHandler = retrieveBookHandler;
exports.editBookHandler = editBookHandler;
exports.deleteBookHandler = deleteBookHandler;
