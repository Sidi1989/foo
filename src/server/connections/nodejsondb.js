const {JsonDB, Config} = require('node-json-db');




// 1st argument is database filename (If no extension: '.json').
// 2nd argument is telling the DB to save after each push (If 'false', you must call the 'save()' method)
// 3rd argument is asking JsonDB to save the database in an human readable format ('False' by default)
// 4th argument is the separator (slash (/)' by default)
const configuration = new Config('PinakesDB', true, false, '.');
var db = new JsonDB(configuration);




exports.db = db;
