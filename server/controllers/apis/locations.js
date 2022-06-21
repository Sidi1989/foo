const {getLocationById, createLocation, deleteLocation} = require('../../models/locations.js');
const {getBookById} = require('../../models/books.js');
const {getMemberById} = require('../../models/members.js');



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
  var member = getMemberById(req.params.member);
  var memberLocations = member.locations.map(function (locationId) {
    var location = getLocationById(locationId);
    var booksInEachLocation = location.books.map(function (bookId) {
      var book = getBookById(bookId);
      return book;
    });
    location.books = booksInEachLocation;
    return location;
  });

  return res.json(memberLocations);
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
