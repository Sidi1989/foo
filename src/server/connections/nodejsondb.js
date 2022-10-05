const path = require('path');
const _ = require('lodash');
const {JsonDB, Config} = require('node-json-db');




/**
  * @description
  * respecto de la configuración de la DB como una instancia de JsonDB, se tiene que
  * emplea 4 parámetros:
  *
  * @param first database filename (if no extension: '.json').
  * @param second telling the DB to save after each push (if 'false': must call the 'save()' method)
  * @param third asking JsonDB to save the database in an human readable format ('false' by default)
  * @param fourth inside separator (by default: 'slash (/)', but in this instance: '.')
  */
var relativeDirname = '../../../runtime/db-migration';
var absoluteDirname = path.join(__dirname, relativeDirname);
var basename = 'PinakesDB.json';
var pathname = path.join(absoluteDirname, basename);
const configuration = new Config(pathname, true, false, '.');
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
    case 'quote':
      relativeRoute = '.quotes';
      break;
    case 'review':
      relativeRoute = '.reviews';
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
  await jsonDb.push(relativeRoute, id, info);
  return
};

var append = async function (type, info) {
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
  var typeLength = (await jsonDb.getData(relativeRoute)).length;

  await jsonDb.push(`${relativeRoute}[${typeLength}]`, info);
  return
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
  append: append,
  erase: erase,

  getData: jsonDb.getData.bind(jsonDb),
  push: jsonDb.push.bind(jsonDb),
  del: jsonDb.delete.bind(jsonDb),
  save: jsonDb.save.bind(jsonDb),
  reload: jsonDb.reload.bind(jsonDb)
};




exports.db = db;
