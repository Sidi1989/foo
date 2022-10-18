const fs = require('fs');
const path = require('path');
const _ = require('lodash');




var read = function (type) {
  var relativeDirname;
  switch (type) {
    case 'author':
      relativeDirname = '../../../runtime/db/authors';
      break;
    case 'book':
      relativeDirname = '../../../runtime/db/books';
      break;
    case 'collection':
      relativeDirname = '../../../runtime/db/collections';
      break;
    case 'location':
      relativeDirname = '../../../runtime/db/locations';
      break;
    case 'member':
      relativeDirname = '../../../runtime/db/members';
      break;
    case 'petition':
      relativeDirname = '../../../runtime/db/petitions';
      break;
    case 'quote':
      relativeDirname = '../../../runtime/db/quotes';
      break;
    case 'review':
      relativeDirname = '../../../runtime/db/reviews';
      break;
    default:
      throw new Error(`type ${type} not recognized`);
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


var write = function (type, id, info) {
  var relativeDirname;
  switch (type) {
    case 'book':
      relativeDirname = '../../../runtime/db/books';
      break;
    case 'collection':
      relativeDirname = '../../../runtime/db/collections';
      break;
    case 'location':
      relativeDirname = '../../../runtime/db/locations';
      break;
    case 'member':
      relativeDirname = '../../../runtime/db/members';
      break;
    case 'petition':
      relativeDirname = '../../../runtime/db/petitions';
      break;
    case 'review':
      relativeDirname = '../../../runtime/db/reviews';
      break;
    default:
      throw new Error(`type ${type} not recognized`);
  }
  const absoluteDirname = path.join(__dirname, relativeDirname);
  var basename = `${id}.json`;
  var pathname = path.join(absoluteDirname, basename);
  var infoAsJson = JSON.stringify(info, null, 2);
  fs.writeFileSync(pathname, infoAsJson);
  return;
};


var erase = function (type, id) {
  var relativeDirname;
  switch (type) {
    case 'book':
      relativeDirname = '../../../runtime/db/books';
      break;
    case 'collection':
      relativeDirname = '../../../runtime/db/collections';
      break;
    case 'location':
      relativeDirname = '../../../runtime/db/locations';
      break;
    case 'member':
      relativeDirname = '../../../runtime/db/members';
      break;
    case 'petition':
      relativeDirname = '../../../runtime/db/petitions';
      break;
    case 'review':
      relativeDirname = '../../../runtime/db/reviews';
      break;
    default:
      throw new Error(`type ${type} not recognized`);
  }
  const absoluteDirname = path.join(__dirname, relativeDirname);
  var basename = `${id}.json`;
  var pathname = path.join(absoluteDirname, basename);
  fs.unlinkSync(pathname);
  return;
};


const db = {
  write: write,
  erase: erase,
  read: read,
};




exports.db = db;
