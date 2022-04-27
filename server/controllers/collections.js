const collections = require('./../runtime/db/collections.json');





var collectionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/collectionform.html`;
  var info;

  res.render(pathname, info);
};





exports.collectionformHandler = collectionformHandler;
