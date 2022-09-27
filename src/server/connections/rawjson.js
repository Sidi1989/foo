const fs = require('fs');
const path = require('path');




const booksRelativeDirname = '../../../runtime/db/books';
const booksAbsoluteDirname = path.join(__dirname, booksRelativeDirname);
const booksBasenames = fs.readdirSync(booksAbsoluteDirname);
const books = booksBasenames.map(function (e) {
  var pathname = path.join(booksAbsoluteDirname, e);
  var book = require(pathname);
  return book;
});

const authorsRelativeDirname = '../../../runtime/db/authors';
const authorsAbsoluteDirname = path.join(__dirname, authorsRelativeDirname);
const authorsBasenames = fs.readdirSync(authorsAbsoluteDirname);
const authors = authorsBasenames.map(function (e) {
  var pathname = path.join(authorsAbsoluteDirname, e);
  var author = require(pathname);
  return author;
});

const categoriesRelativeDirname = '../../../runtime/db/categories';
const categoriesAbsoluteDirname = path.join(__dirname, categoriesRelativeDirname);
const categoriesBasenames = fs.readdirSync(categoriesAbsoluteDirname);
const categories = categoriesBasenames.map(function (e) {
  var pathname = path.join(categoriesAbsoluteDirname, e);
  var category = require(pathname);
  return category;
});

const collectionsRelativeDirname = '../../../runtime/db/collections';
const collectionsAbsoluteDirname = path.join(__dirname, collectionsRelativeDirname);
const collectionsBasenames = fs.readdirSync(collectionsAbsoluteDirname);
const collections = collectionsBasenames.map(function (e) {
  var pathname = path.join(collectionsAbsoluteDirname, e);
  var collection = require(pathname);
  return collection;
});

const languagesRelativeDirname = '../../../runtime/db/languages';
const languagesAbsoluteDirname = path.join(__dirname, languagesRelativeDirname);
const languagesBasenames = fs.readdirSync(languagesAbsoluteDirname);
const languages = languagesBasenames.map(function (e) {
  var pathname = path.join(languagesAbsoluteDirname, e);
  var language = require(pathname);
  return language;
});

const locationsRelativeDirname = '../../../runtime/db/locations';
const locationsAbsoluteDirname = path.join(__dirname, locationsRelativeDirname);
const locationsBasenames = fs.readdirSync(locationsAbsoluteDirname);
const locations = locationsBasenames.map(function (e) {
  var pathname = path.join(locationsAbsoluteDirname, e);
  var location = require(pathname);
  return location;
});

const membersRelativeDirname = '../../../runtime/db/members';
const membersAbsoluteDirname = path.join(__dirname, membersRelativeDirname);
const membersBasenames = fs.readdirSync(membersAbsoluteDirname);
const members = membersBasenames.map(function (e) {
  var pathname = path.join(membersAbsoluteDirname, e);
  var member = require(pathname);
  return member;
});

const petitionsRelativeDirname = '../../../runtime/db/petitions';
const petitionsAbsoluteDirname = path.join(__dirname, petitionsRelativeDirname);
const petitionsBasenames = fs.readdirSync(petitionsAbsoluteDirname);
const petitions = petitionsBasenames.map(function (e) {
  var pathname = path.join(petitionsAbsoluteDirname, e);
  var petition = require(pathname);
  return petition;
});

const quotesRelativeDirname = '../../../runtime/db/quotes';
const quotesAbsoluteDirname = path.join(__dirname, quotesRelativeDirname);
const quotesBasenames = fs.readdirSync(quotesAbsoluteDirname);
const quotes = quotesBasenames.map(function (e) {
  var pathname = path.join(quotesAbsoluteDirname, e);
  var quote = require(pathname);
  return quote;
});

const reviewsRelativeDirname = '../../../runtime/db/reviews';
const reviewsAbsoluteDirname = path.join(__dirname, reviewsRelativeDirname);
const reviewsBasenames = fs.readdirSync(reviewsAbsoluteDirname);
const reviews = reviewsBasenames.map(function (e) {
  var pathname = path.join(reviewsAbsoluteDirname, e);
  var review = require(pathname);
  return review;
});

const subcategoriesRelativeDirname = '../../../runtime/db/subcategories';
const subcategoriesAbsoluteDirname = path.join(__dirname, subcategoriesRelativeDirname);
const subcategoriesBasenames = fs.readdirSync(subcategoriesAbsoluteDirname);
const subcategories = subcategoriesBasenames.map(function (e) {
  var pathname = path.join(subcategoriesAbsoluteDirname, e);
  var subcategory = require(pathname);
  return subcategory;
});

const db = {
  authors:authors,
  books:books,
  categories:categories,
  collections:collections,
  languages:languages,
  locations:locations,
  members:members,
  petitions:petitions,
  quotes:quotes,
  reviews:reviews,
  subcategories:subcategories
}




exports.authors = authors;
exports.books = books;
exports.categories = categories;
exports.collections = collections;
exports.languages = languages;
exports.locations = locations;
exports.members = members;
exports.petitions = petitions;
exports.quotes = quotes;
exports.reviews = reviews;
exports.subcategories = subcategories;
exports.db = db;
