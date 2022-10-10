const {getLocationById, createLocation, deleteLocation} = require('../../models/locations.js');
const {getMemberById} = require('../../models/members.js');




/**
  * @description
  * función para listar todas las sedes de un miembro determinado (conocido
  * a partir de su id en req.params.member), obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con las mismas.
  */
var listMemberLocationsHandler = async function (req, res) {
  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  }

  return res.json(member.locations);
};


/**
  * @description
  * handler para responder a la petición de la creación de una nueva sede,
  * a partir de los datos proporcionados en el req.body.
  */
var createLocationHandler = function (req, res) {
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


/**
  * @description
  * handler para responder a la petición de recuperar la información almacenada
  * sobre una sede concreta (conocida a partir de su id en req.params.location).
  */
var retrieveLocationHandler = function (req, res) {
  var location = getLocationById(req.params.location);

  return res.json(location);
};


/**
  * @description
  * handler para responder a la petición de modificar la información almacenada
  * sobre una sede concreta (conocida a partir de su id en req.params.location).
  */
var editLocationHandler = function (req, res) {
  var location = getLocationById(req.params.location);

  return res.json(location);
};


/**
  * @description
  * handler para responder a la petición de eliminar la información almacenada
  * sobre una sede concreta (conocida a partir de su id en req.params.location).
  */
var deleteLocationHandler = function (req, res) {
  deleteLocation(req.params.location);

  var info = {
    status: "OK",
    location: req.params.location
  };

  return res.json(info);
};




exports.listMemberLocationsHandler = listMemberLocationsHandler;
exports.createLocationHandler = createLocationHandler;
exports.retrieveLocationHandler = retrieveLocationHandler;
exports.editLocationHandler = editLocationHandler;
exports.deleteLocationHandler = deleteLocationHandler;
