const {getAllLocations, getLocationById, createLocation, deleteLocation} = require('../../models/locations.js');




var apiCreateLocationHandler = function (req, res) {
  var newLocationInfo = {
    owner: req.user.id,
    name: req.body.name,
    pic: req.body.pic
  };
  var newLocation = createLocation(newLocationInfo);

  var info = {
    status: "OK",
    location: newLocation
  };
  return res.json(info);
};


var apiListLocationsHandler = function (req, res) {
  var locations = getAllLocations();

  return res.json(locations);
};


var apiRetrieveLocationHandler = function (req, res) {
  var location = getLocationById(req.params.location);

  return res.json(location);
};


var apiEditLocationHandler = function (req, res) {
  var location = getLocationById(req.params.location);

  return res.json(location);
};


var apiDeleteLocationHandler = function (req, res) {
  deleteLocation(req.params.location);

  var info = {
    status: "OK",
    location: req.params.location
  };
  return res.json(info);
};




exports.apiCreateLocationHandler = apiCreateLocationHandler;
exports.apiListLocationsHandler = apiListLocationsHandler;
exports.apiRetrieveLocationHandler = apiRetrieveLocationHandler;
exports.apiEditLocationHandler = apiEditLocationHandler;
exports.apiDeleteLocationHandler = apiDeleteLocationHandler;
