const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const quotesRelativeDirname = '../../../runtime/db/quotes';
const quotesAbsoluteDirname = path.join(__dirname, quotesRelativeDirname);
const quotesBasenames = fs.readdirSync(quotesAbsoluteDirname);
const quotes = quotesBasenames.map(function (e) {
  var pathname = path.join(quotesAbsoluteDirname, e);
  var quote = require(pathname);
  return quote;
});




var getAllQuotes = function () {
  return _.cloneDeep(quotes);
};


var getQuoteById = function (id) {
  var clonedQuotes = _.cloneDeep(quotes);
  var filteredQuotes = clonedQuotes.filter(function (e) {
    return (e.id == id);
  });

  var quote;
  if (filteredQuotes.length == 0) {
    quote = null;
  } else {
    quote = filteredQuotes[0];
  }

  return quote;
};


var getRandomQuotes = function (quantity) {
  var clonedQuotes = _.cloneDeep(quotes)
  var shuffledQuotes = _.shuffle(clonedQuotes);
  var takenQuotes = _.take(shuffledQuotes, quantity);
  return takenQuotes;
};




exports.getAllQuotes = getAllQuotes;
exports.getQuoteById = getQuoteById;
exports.getRandomQuotes = getRandomQuotes;
