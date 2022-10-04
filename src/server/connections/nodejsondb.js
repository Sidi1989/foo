const path = require('path');
const _ = require('lodash');
const {JsonDB, Config} = require('node-json-db');




// 1st argument is database filename (If no extension: '.json').
// 2nd argument is telling the DB to save after each push (If 'false': you must call the 'save()' method)
// 3rd argument is asking JsonDB to save the database in an human readable format ('False' by default)
// 4th argument is the separator ('slash (/)' by default)
var relativeDirname = '../../../runtime/db-migration';
var absoluteDirname = path.join(__dirname, relativeDirname);
var basename = 'PinakesDB.json';
var pathname = path.join(absoluteDirname, basename);
const configuration = new Config(pathname, false, false, '.');
var jsonDb = new JsonDB(configuration);


var read = async function (type) {
  var relativeRoute;
  switch (type) {
    case 'author':
      relativeRoute = '.authors';
      break;
    case 'book':
      relativeRoute = '.books';
      break;
    case 'category':
      relativeRoute = '.categories';
      break;
    case 'collection':
      relativeRoute = '.collections';
      break;
    case 'language':
      relativeRoute = '.languages';
      break;
    case 'location':
      relativeRoute = '.locations';
      break;
    case 'member':
      relativeRoute = '.members';
      break;
    case 'petition':
      relativeRoute = '.petitions';
      break;
    case 'quote':
      relativeRoute = '.quotes';
      break;
    case 'review':
      relativeRoute = '.reviews';
      break;
    case 'subcategory':
      relativeRoute = '.subcategories';
      break;
    default:
      throw new Error(`type ${type} not recognized`);
  }
  const elements = await jsonDb.getData(relativeRoute);
  return _.cloneDeep(elements);
};


var write = async function (type, id, info) {
  var relativeRoute;
  switch (type) {
    case 'book':
      relativeRoute = '.books';
      break;
    case 'collection':
      relativeRoute = '.collections';
      break;
    case 'location':
      relativeRoute = '.locations';
      break;
    case 'member':
      relativeRoute = '.members';
      break;
    case 'petition':
      relativeRoute = '.petitions';
      break;
    case 'review':
      relativeRoute = '.reviews';
      break;
    default:
      throw new Error(`type ${type} not recognized`);
  }
  const elements = await jsonDb.push(relativeRoute, id, 'info que escribe');
  return _.cloneDeep(elements);
};


var erase = async function (type, id) {
  var relativeRoute;
  switch (type) {
    case 'book':
      relativeRoute = '.books';
      break;
    case 'collection':
      relativeRoute = '.collections';
      break;
    case 'location':
      relativeRoute = '.locations';
      break;
    case 'member':
      relativeRoute = '.members';
      break;
    case 'petition':
      relativeRoute = '.petitions';
      break;
    case 'review':
      relativeRoute = '.reviews';
      break;
    default:
      throw new Error(`type ${type} not recognized`);
  }
  const elements = await jsonDb.delete(relativeRoute, id);
  return _.cloneDeep(elements);
};


const db = {
  read: read,
  write: write,
  erase: erase,

  getData: jsonDb.getData.bind(jsonDb),
  push: jsonDb.push.bind(jsonDb),
  del: jsonDb.delete.bind(jsonDb),
  save: jsonDb.save.bind(jsonDb),
  reload: jsonDb.reload.bind(jsonDb)
};




exports.db = db;
