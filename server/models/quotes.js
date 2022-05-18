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
  var filteredQuotes = quotes.filter(function (e,i) {
    var aleas = Math.random();
    return (aleas > 0.5);
  });

  var takenQuotes = _.take(filteredQuotes);
  return _.cloneDeep(takenQuotes);
};




exports.getAllQuotes = getAllQuotes;
exports.getQuoteById = getQuoteById;
exports.getRandomQuotes = getRandomQuotes;
