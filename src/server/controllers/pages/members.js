const {getAuthorById} = require('../../models/authors.js');
const {getRandomBooks} = require('../../models/books.js');
const {getMemberById, getLastBookForMember} = require('../../models/members.js');
const {getRandomQuotes} = require('../../models/quotes.js');




/**
  * @description
  * handler destinado a cubrir la petición del SignIn de un usuario; pero de manera
  * que si su req.user.type (conocido desde el middleware "auth") corresponde al de
  * un miembro, se le redirigirá directamente a su página de perfil, y no se
  * renderizará la view de SignIn común a todos los usuarios.
  *
  * @param req contiene la información de la petición
  * @param res contiene la renderización de la petición para el cliente
  */
var signInHandler = async function (req, res) {
  if (req.user.type == 'member') {
    res.redirect(`/members/${req.user.id}`);
    return
  }
  var pathname = `${__dirname}/../../../views/pages/sign-in.ejs`;
  var info = {};

  var dailyQuote = (await getRandomQuotes(1))[0];
  info.quote = dailyQuote;

  res.render(pathname, info);
};


/**
  * @description
  * handler destinado a cubrir la petición del SignUp de un nuevo miembro,
  * para lo que renderizará la view en que deben introducirse los datos necesarios
  * para ser incluido como tal en la DB.
  *
  * @param req contiene la información de la petición
  * @param res contiene la renderización de la petición para el cliente
  */
var signUpHandler= function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/sign-up.ejs`;
  var info = {};

  res.render(pathname, info);
};


/**
  * @description
  * handler destinado a cubrir la petición de mostrar la Configuración de la Cuenta
  * de un Miembro concreto (identificado desde req.params.member), recuperando así
  * la información del mismo que podrá ser examinada y alterada en dicha página.
  *
  * @param req contiene la información de la petición
  * @param res contiene la renderización de la petición para el cliente
  */
var memberEditHandler = async function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/member-edit.ejs`;
  var info = {};

  info.categories = req.categories;
  info.subcategories = req.subcategories;
  info.languages = req.languages;

  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  } else {
    info.member = member;
  }

  res.render(pathname, info);
};


/**
  * @description
  * handler destinado a cubrir la petición de mostrar la Página Principal de
  * un Miembro concreto (identificado desde req.params.member), recuperando así
  * la información del mismo que podrá ser examinada y alterada en dicha página.
  *
  * @param req contiene la información de la petición
  * @param res contiene la renderización de la petición para el cliente
  */
var memberProfileHandler = async function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/member-profile.ejs`;
  var info = {};

  info.categories = req.categories;
  info.subcategories = req.subcategories;
  info.languages = req.languages;

  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  } else {
    info.member = member;
  }

  var orphanBooks = member.books.filter(e => e.collection == null);
  info.orphanBooks = orphanBooks;

  var lastBookAdded = await getLastBookForMember(member.id, true);
  if (lastBookAdded == null) lastBookAdded = {};
  info.lastBookAdded = lastBookAdded;

  var suggestedBooksChunks = await getRandomBooks(6, 3);
  for (var chunk of suggestedBooksChunks) {
    for (var e of chunk) {
    e.author = await getAuthorById(e.author);
    }
  }
  info.suggestedBooks = suggestedBooksChunks;

  res.render(pathname, info);
};




exports.signInHandler = signInHandler;
exports.signUpHandler = signUpHandler;
exports.memberEditHandler = memberEditHandler;
exports.memberProfileHandler = memberProfileHandler;
