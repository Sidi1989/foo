/**
  * @description
  * función con que se confirma, mediante su repetición en la terminal, en qué
  * URL concreta se encuentra el usuario que navega por la app.
  */
var log = function (req, res, next) {
  console.log(req.originalUrl);
  return next();
};




exports.log = log;
