const _ = require('lodash');
const {db} = require('../connections/rawjson.js');




/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "quotes"
 */
var getAllQuotes = function () {
  var type = 'quote';
  var quotes = db.read(type);
  return quotes;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre una "quote" específica
 * a partir de la identificación de su atributo "id"
 */
var getQuoteById = function (id) {
  var type = 'quote';
  var quotes = db.read(type);
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


/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "quotes", para a continuación
 * aleatorizar el listado de sus elementos y quedarse con sólo un número
 * específico de ellos (que es el parámetro de la función)
 */
var getRandomQuotes = function (quantity) {
  var type = 'quote';
  var quotes = db.read(type);
  var shuffledQuotes = _.shuffle(quotes);
  var takenQuotes = _.take(shuffledQuotes, quantity);
  return takenQuotes;
};




exports.getAllQuotes = getAllQuotes;
exports.getQuoteById = getQuoteById;
exports.getRandomQuotes = getRandomQuotes;
