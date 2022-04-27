const collections = require('./../runtime/db/petitions.json');





var petitionformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/petitionform.html`;
  var info;

  res.render(pathname, info);
};





exports.petitionformHandler = petitionformHandler;
