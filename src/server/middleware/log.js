var log = function (req, res, next) {
  console.log(req.originalUrl);
  return next();
};




exports.log = log;
