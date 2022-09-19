const express = require('express');
const {renderFile: ejsRenderEngine} = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');
const {auth, log} = require('./middleware/index.js');
const {router: dispatch} = require('./middleware/dispatch.js');




const app = express();
const port = process.argv[2] || 3004;
app.engine('ejs', ejsRenderEngine);
app.listen(port, function () {
  console.log(`Pinakes se escucha en el puerto ${port}`)
});

const publicDirname = path.join(__dirname, '../public');
const options = {};
app.use('/public', express.static(publicDirname, options));

app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing json
app.use(express.urlencoded({ extended: true })); // for parsing x-www-form-urlencoded
app.use(log); // for logging requests
app.use(auth); // for authenticate users, with cookies
app.use(dispatch); // for routing
