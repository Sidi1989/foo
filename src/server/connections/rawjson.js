const fs = require('fs');
const path = require('path');
const _ = require('lodash');




var readPinakes = function (type) {
  var relativeDirname;
  if (type == 'author') {
    relativeDirname = '../../../runtime/db/authors';
  } else if (type == 'book') {
    relativeDirname = '../../../runtime/db/books';
  } else if (type == 'category') {
    relativeDirname = '../../../runtime/db/categories';
  } else if (type == 'collection') {
    relativeDirname = '../../../runtime/db/collections';
  } else if (type == 'language') {
    relativeDirname = '../../../runtime/db/languages';
  } else if (type == 'location') {
    relativeDirname = '../../../runtime/db/locations';
  } else if (type == 'member') {
    relativeDirname = '../../../runtime/db/members';
  } else if (type == 'petition') {
    relativeDirname = '../../../runtime/db/petitions';
  } else if (type == 'quote') {
    relativeDirname = '../../../runtime/db/quotes';
  } else if (type == 'review') {
    relativeDirname = '../../../runtime/db/reviews';
  } else if (type == 'subcategory') {
    relativeDirname = '../../../runtime/db/subcategories';
  } else {
    return false
  }
  const absoluteDirname = path.join(__dirname, relativeDirname);
  const basenames = fs.readdirSync(absoluteDirname);
  const elements = basenames.map(function (e) {
    var pathname = path.join(absoluteDirname, e);
    var element = require(pathname);
    return element;
  });
  return _.cloneDeep(elements);
};


var writePinakes = function (type, id, info) {
  var relativeDirname;
  if (type == 'book') {
    relativeDirname = '../../../runtime/db/books';
  } else if (type == 'collection') {
    relativeDirname = '../../../runtime/db/collections';
  } else if (type == 'location') {
    relativeDirname = '../../../runtime/db/locations';
  } else if (type == 'member') {
    relativeDirname = '../../../runtime/db/members';
  } else if (type == 'petition') {
    relativeDirname = '../../../runtime/db/petitions';
  } else if (type == 'review') {
    relativeDirname = '../../../runtime/db/review';
  } else {
    return false
  }
  const absoluteDirname = path.join(__dirname, relativeDirname);
  var basename = `${id}.json`;
  var pathname = path.join(absoluteDirname, basename);
  var infoAsJson = JSON.stringify(info, null, 2);
  fs.writeFileSync(pathname, infoAsJson);
  return;
};


var erasePinakes = function (type, id) {
  var relativeDirname;
  if (type == 'book') {
    relativeDirname = '../../../runtime/db/books';
  } else if (type == 'collection') {
    relativeDirname = '../../../runtime/db/collections';
  } else if (type == 'location') {
    relativeDirname = '../../../runtime/db/locations';
  } else if (type == 'member') {
    relativeDirname = '../../../runtime/db/members';
  } else if (type == 'petition') {
    relativeDirname = '../../../runtime/db/petitions';
  } else if (type == 'review') {
    relativeDirname = '../../../runtime/db/review';
  } else {
    return false
  }
  const absoluteDirname = path.join(__dirname, relativeDirname);
  var basename = `${id}.json`;
  var pathname = path.join(absoluteDirname, basename);
  fs.unlinkSync(pathname);
  return;
};


const db = {
  writePinakes: writePinakes,
  erasePinakes: erasePinakes,
  readPinakes: readPinakes,
};




exports.db = db;
