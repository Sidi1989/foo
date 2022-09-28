const {v4: uuidv4} = require('uuid');
const {db} = require('../connections/rawjson.js');




var getAllLocations = function () {
  var type = 'location';
  var locations = db.read(type);
  return locations;
};


var getLocationById = function (id) {
  var type = 'location';
  var locations = db.read(type);
  var filteredLocations = locations.filter(function (e) {
    return (e.id == id);
  });

  var location;
  if (filteredLocations.length == 0) {
    location = null;
  } else {
    location = filteredLocations[0];
  }

  return location;
};


var createLocation = function (info) {
  var type = 'location';
  var locationId = `loc${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newLocation = {
    id: locationId,
    owner: info.owner,
    addingDate: date,
    name: info.name,
    pic: info.pic
  };
  db.write(type, locationId, newLocation);
  return newLocation;
};


var deleteLocation = function (locationId) {
  var type = 'location';
  db.erase(type, locationId)
  return locationId
};




exports.getAllLocations = getAllLocations;
exports.getLocationById = getLocationById;
exports.createLocation = createLocation;
exports.deleteLocation = deleteLocation;
