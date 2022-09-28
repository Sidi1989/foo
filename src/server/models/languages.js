const {db} = require('../connections/rawjson.js');




var getAllLanguages = function () {
  var type = 'language';
  var languages = db.readPinakes(type);
  return languages;
};


var getLanguageById = function (id) {
  var type = 'language';
  var languages = db.readPinakes(type);
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
