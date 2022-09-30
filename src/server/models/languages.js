const {db} = require('../connections/rawjson.js');




/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "languages"
 */
var getAllLanguages = function () {
  var type = 'language';
  var languages = db.read(type);
  return languages;
};



/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre un "language"
 * específico a partir de la identificación de su atributo "id"
 */
var getLanguageById = function (id) {
  var type = 'language';
  var languages = db.read(type);
  var filteredLanguages = languages.filter(function (e) {
    return (e.id == id);
  });

  var language;
  if (filteredLanguages.length == 0) {
    language = null;
  } else {
    language = filteredLanguages[0];
  }

    return language;
};




exports.getAllLanguages = getAllLanguages;
exports.getLanguageById = getLanguageById;
