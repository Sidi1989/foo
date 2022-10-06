const {getAuthorById} = require('../../models/authors.js');
const {getBookById, getRandomBooks} = require('../../models/books.js');
const {getMemberById} = require('../../models/members.js');
const {getReviewById} = require('../../models/reviews.js');




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

  if (!info.book.reviews) info.book.reviews = [];
  var reviewsMapped = [];
  for (var id of info.book.reviews) {
    var review = await getReviewById(id);
    if (review.reviewer == null) {
      review.reviewer = {};
    } else {
      var reviewer = await getMemberById(review.reviewer, true);
      review.reviewer = reviewer;
    }
    reviewsMapped.push(review);
  }
  info.reviews = reviewsMapped;

  var suggestedBooksChunks = await getRandomBooks(6, 3);
  for (var chunk of suggestedBooksChunks) {
    for (var e of chunk) {
    e.author = await getAuthorById(e.author);
    }
  }
  info.suggestedBooks = suggestedBooksChunks;

  res.render(pathname, info);
};




exports.bookProfileHandler = bookProfileHandler;
