const collections = require('./../runtime/db/collections.json');




var bookdetailHandler = function (req, res) {
  var pathname = `${__dirname}/../../Pinakes/html/bookdetail.html`;

  var filteredBooks = books.filter( (e) => {
    return (req.params.book == e.id)
  });

  if (filteredBooks.length == 0) {
    var info = {};
  } else {
    var info = filteredBooks[0];
  };

  res.render(pathname, info);
};




exports.bookdetailHandler = bookdetailHandler;
