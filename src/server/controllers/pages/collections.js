const {getCollectionById, getMemberById} = require('../../models/transfers.js');




/**
  * @description
  * handler destinado a cubrir la petición de mostrar la Página Principal de
  * una Colección concreta, identificada a partir de su miembro poseedor (desde
  * req.params.member), y en concreto como ella misma de entre las colecciones
  * de dicho miembro (desde req.params.collection)
  *
  * @param req contiene la información de la petición
  * @param res contiene la renderización de la petición para el cliente
  */
var collectionProfileHandler = async function (req, res) {
  var pathname = `${__dirname}/../../../views/pages/collection-profile.ejs`;
  var info = {};

  info.categories = req.categories;
  info.subcategories = req.subcategories;
  info.languages = req.languages;

  var collection = await getCollectionById(req.params.collection);
  if (collection == null) {
    info.collection = {};
  } else {
    info.collection = collection;
  }

  var member = await getMemberById(req.params.member, false);
  if (member == null) {
    res.status(404).send('Algo ha salido mal');
  } else {
    info.member = member;
  }

  res.render(pathname, info);
};




exports.collectionProfileHandler = collectionProfileHandler;
