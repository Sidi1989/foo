const _ = require('lodash');
const quotes = require('../../runtime/db/quotes.json');




var getAllQuotes = function () {
  return _.cloneDeep(quotes);
};


var getQuoteById = function (id) {
  var filteredQuotes = quotes.filter(function (e) {
    return (e.id == id);
  });

  var quote;
  if (filteredQuotes.length == 0) {
    quote = null;
  } else {
    quote = filteredQuotes[0];
  };

  return _.cloneDeep(quote);
};


var getRandomQuotes = function (quantity) {
  var shuffledQuotes = _.shuffle(quotes);
  var takenQuotes = _.take(shuffledQuotes, quantity);
  return _.cloneDeep(takenQuotes);
};




exports.getAllQuotes = getAllQuotes;
exports.getQuoteById = getQuoteById;
exports.getRandomQuotes = getRandomQuotes;
