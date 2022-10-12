const {getAuthorById, getRandomBooks, getBookById, getMemberById} = require('../../models/transfers.js');




/**
  * @description
  * handler destinado a cubrir la petición de mostrar la Página Principal de
  * un Libro concreto (identificado desde req.params.book); y que recupera además
  * información transversal sobre su poseedor (identificado desde req.user.id)
  *
  * @param req contiene la información de la petición
  * @param res contiene la renderización de la petición para el cliente
  */
var bookProfileHandler = async function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/book-profile.ejs`;
  var info = {};

  info.categories = req.categories;
  info.subcategories = req.subcategories;
  info.languages = req.languages;

  var member = await getMemberById(req.user.id, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  } else {
    info.member = member;
  }

  var book = await getBookById(req.params.book, true);
  if (book == null) {
    res.status(404).send('Algo ha salido mal');
  } else {
    info.book = book;
  }

  var suggestedBooksChunks = await getRandomBooks(6, 3);
  for (let chunk of suggestedBooksChunks) {
    for (let randomBook of chunk) {
    randomBook.author = await getAuthorById(randomBook.author);
    }
  }
  info.suggestedBooks = suggestedBooksChunks;

  res.render(pathname, info);
};




exports.bookProfileHandler = bookProfileHandler;
