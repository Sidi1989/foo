const {getPetitionById, createPetition, deletePetition, getMemberById} = require('../../models/transfers.js');




/**
  * @description
  * función para listar todas las peticiones de un miembro determinado (conocido
  * a partir de su id en req.params.member), obteniendo además el valor concreto de
  * sus distintos atributos, y respondiendo a través de un json con las mismos.
  */
var listMemberPetitionsHandler = async function (req, res) {
  var member = await getMemberById(req.params.member, true);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  }

  return res.json(member.petitions);
};


/**
  * @description
  * handler para responder a la petición de la creación de una nueva petición,
  * a partir de los datos proporcionados en el req.body.
  */
var createPetitionHandler = function (req, res) {
  var newPetitionInfo = {
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    subcategory: req.body.subcategory,
    language: req.body.language,
    shoppingLink: req.body.shoppingLink
  };
  var newPetition = createPetition(newPetitionInfo);

  var info = {
    status: "OK",
    petition: newPetition
  };

  return res.json(info);
};


/**
  * @description
  * handler para responder a la petición de recuperar la información almacenada
  * sobre una petición concreta (conocida a partir de su id en req.params.petition).
  */
var retrievePetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};


/**
  * @description
  * handler para responder a la petición de modificar la información almacenada
  * sobre una petición concreta (conocida a partir de su id en req.params.petition).
  */
var editPetitionHandler = function (req, res) {
  var petition = getPetitionById(req.params.petition);

  return res.json(petition);
};


/**
  * @description
  * handler para responder a la petición de eliminar la información almacenada
  * sobre una petición concreta (conocida a partir de su id en req.params.petition).
  */
var deletePetitionHandler = function (req, res) {
  deletePetition(req.params.petition);

  var info = {
    status: "OK",
    petition: req.params.petition
  };

  return res.json(info);
};




exports.listMemberPetitionsHandler = listMemberPetitionsHandler;
exports.createPetitionHandler = createPetitionHandler;
exports.retrievePetitionHandler = retrievePetitionHandler;
exports.editPetitionHandler = editPetitionHandler;
exports.deletePetitionHandler = deletePetitionHandler;
