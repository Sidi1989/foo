const _ = require('lodash');
const languages = require('../../runtime/db/languages.json');




var getAllLanguages = function () {
  return _.cloneDeep(languages);
};


var getLanguageById = function (id) {
  var filteredLanguages = languages.filter(function (e) {
    return (e.id == id);
  });

  var language;
  if (filteredLanguages.length == 0) {
    language = null;
  } else {
    language = filteredLanguages[0];
  };

    return _.cloneDeep(language);
};




exports.getAllLanguages = getAllLanguages;
exports.getLanguageById = getLanguageById;
