const _ = require('lodash');
const {languages} = require('../connections/rawjson.js');




var getAllLanguages = function () {
  return _.cloneDeep(languages);
};


var getLanguageById = function (id) {
  var clonedLanguages= _.cloneDeep(languages);
  var filteredLanguages = clonedLanguages.filter(function (e) {
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
