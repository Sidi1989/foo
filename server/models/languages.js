const languages = require('../../runtime/db/languages.json');




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

  return language;
};




exports.getLanguageById = getLanguageById;
