const books = require('./../runtime/db/books.json');





var bookformHandler= function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/bookform.html`;
  var info;

  res.render(pathname, info);
};

var bookprofileHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/bookprofile.html`;

  var filteredBooks = books.filter(function (e) {
    return (req.params.book == e.id)
  });

  var info;
  if (filteredBooks.length == 0) {
    info = {};
  } else {
    info = filteredBooks[0];
  };

  res.render(pathname, info);
};





exports.bookformHandler = bookformHandler;
exports.bookprofileHandler = bookprofileHandler;
