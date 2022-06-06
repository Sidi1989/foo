const fs = require('fs');
const path = require('path');
const _ = require('lodash');
//const locations = require('../../runtime/db/locations.json');
const locationsRelativeDirname = '../../runtime/db/locations';
const locationsAbsoluteDirname = path.join(__dirname, locationsRelativeDirname);
const locationsBasenames = fs.readdirSync(locationsAbsoluteDirname);
const locations = locationsBasenames.map(function (e) {
  var pathname = path.join(locationsAbsoluteDirname, e);
  var location = require(pathname);
  return location;
});




var getAllLocations = function () {
  return _.cloneDeep(locations);
};


var getLocationById = function (id) {
  var clonedLocations = _.cloneDeep(locations);
  var filteredLocations = clonedLocations.filter(function (e) {
    return (e.id == id);
  });

  var location;
  if (filteredLocations.length == 0) {
    location = null;
  } else {
    location = filteredLocations[0];
  };

  return location;
};




exports.getAllLocations = getAllLocations;
exports.getLocationById = getLocationById;
