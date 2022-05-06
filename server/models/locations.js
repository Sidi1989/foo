const _ = require('lodash');
const locations = require('../../runtime/db/locations.json');




var getAllLocations = function () {
  return _.cloneDeep(locations);
};


var getLocationById = function (id) {
  var filteredLocations = locations.filter(function (e) {
    return (e.id == id);
  });

  var location;
  if (filteredLocations.length == 0) {
    location = null;
  } else {
    location = filteredLocations[0];
  };

  return _.cloneDeep(location);
};




exports.getAllLocations = getAllLocations;
exports.getLocationById = getLocationById;
