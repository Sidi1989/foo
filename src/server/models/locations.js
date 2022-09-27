const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');
const _ = require('lodash');
const {locations} = require('../connections/rawjson.js');




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
  }

  return location;
};


var createLocation = function (info) {
  var locationId = `loc${uuidv4().slice(0,3)}`;
  var date = `${new Date().toJSON().split('T')[0]}`
  var newLocation = {
    id: locationId,
    owner: info.owner,
    addingDate: date,
    name: info.name,
    pic: info.pic
  };
  var newLocationAsJson = JSON.stringify(newLocation, null, 2);
  var dirname = locationsAbsoluteDirname;
  var basename = `${locationId}.json`;
  var pathname = path.join(dirname, basename);
  fs.writeFileSync(pathname, newLocationAsJson);

  return newLocation;
};


var deleteLocation = function (locationId) {
  var dirname = locationsAbsoluteDirname;
  var basename = `${locationId}.json`;
  var pathname = path.join(dirname, basename);
  fs.unlinkSync(pathname);

  return locationId
};




exports.getAllLocations = getAllLocations;
exports.getLocationById = getLocationById;
exports.createLocation = createLocation;
exports.deleteLocation = deleteLocation;
