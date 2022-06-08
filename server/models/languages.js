const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const languagesRelativeDirname = '../../runtime/db/languages';
const languagesAbsoluteDirname = path.join(__dirname, languagesRelativeDirname);
const languagesBasenames = fs.readdirSync(languagesAbsoluteDirname);
const languages = languagesBasenames.map(function (e) {
  var pathname = path.join(languagesAbsoluteDirname, e);
  var language = require(pathname);
  return language;
});




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
