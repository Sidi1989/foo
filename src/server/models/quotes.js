const _ = require('lodash');
const {quotes} = require('../connections/rawjson.js');




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
