const _ = require('lodash');
const {db} = require('../connections/rawjson.js');




var getAllQuotes = function () {
  var type = 'quote';
  var quotes = db.readPinakes(type);
  return quotes;
};


var getQuoteById = function (id) {
  var type = 'quote';
  var quotes = db.readPinakes(type);
  var filteredQuotes = quotes.filter(function (e) {
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
  var type = 'quote';
  var quotes = db.readPinakes(type);
  var shuffledQuotes = _.shuffle(quotes);
  var takenQuotes = _.take(shuffledQuotes, quantity);
  return takenQuotes;
};




exports.getAllQuotes = getAllQuotes;
exports.getQuoteById = getQuoteById;
exports.getRandomQuotes = getRandomQuotes;
