var auth = function (req, res, next) {
  req.user = {};
  req.user.type = (req.cookies.session)? 'member' : 'guest';
  req.user.id = req.cookies.session || null;

  req.book = {};
  req.book.id = req.cookies.book;
  return next();
};


var log = function (req, res, next) {
  console.log(req.originalUrl);
  return next();
};




exports.auth = auth;
exports.log = log;
