const {getCollectionById, createCollection, deleteCollection, getMemberById} = require('../../models/transfers.js');




/**
  * @description
  * función para listar todas las colecciones de un miembro determinado (conocido
  * a partir de su id en req.params.member), obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con las mismas.
  */
var listMemberCollectionsHandler = async function (req, res) {
  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  }

  return res.json(member.collections);
};


/**
  * @description
  * handler para responder a la petición de la creación de una nueva colección,
  * a partir de los datos proporcionados en el req.body.
  */
var createCollectionHandler = function (req, res) {
  var newCollectionInfo = {
    owner: req.user.id,
    name: req.body.name,
    pic: req.body.pic
  };
  var newCollection = createCollection(newCollectionInfo);

  var info = {
    status: "OK",
    collection: newCollection
  };

  return res.json(info);
};


/**
  * @description
  * handler para responder a la petición de recuperar la información almacenada
  * sobre una colección concreta (conocida a partir de su id en req.params.collection).
  */
var retrieveCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};


/**
  * @description
  * handler para responder a la petición de modificar la información almacenada
  * sobre una colección concreta (conocida a partir de su id en req.params.collection).
  */
var editCollectionHandler = function (req, res) {
  var collection = getCollectionById(req.params.collection);

  return res.json(collection);
};


/**
  * @description
  * handler para responder a la petición de eliminar la información almacenada
  * sobre una colección concreta (conocida a partir de su id en req.params.collection).
  */
var deleteCollectionHandler = function (req, res) {
  deleteCollection(req.params.collection);

  var info = {
    status: "OK",
    collection: req.params.collection
  };

  return res.json(info);
};




exports.listMemberCollectionsHandler = listMemberCollectionsHandler;
exports.createCollectionHandler = createCollectionHandler;
exports.retrieveCollectionHandler = retrieveCollectionHandler;
exports.editCollectionHandler = editCollectionHandler;
exports.deleteCollectionHandler = deleteCollectionHandler;
