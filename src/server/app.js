const express = require('express');
const {renderFile: ejsRenderEngine} = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');
const {log} = require('./middleware/log.js');
const {auth} = require('./middleware/auth.js');
const {dispatch} = require('./middleware/dispatch.js');




const app = express();
const port = process.argv[2] || 3004;
app.engine('ejs', ejsRenderEngine);
app.listen(port, function () {
  console.log(`Pinakes se escucha en el puerto ${port}`)
});

//Establece la ruta para las llamadas internas a la carpeta "public"
const publicDirname = path.join(__dirname, '../public');
const options = {};
app.use('/public', express.static(publicDirname, options));

//Permiten parsear cookies, jsons y x-www-form-urlencoded
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(log); // for logging requests
app.use(auth); // for authenticate users, through cookies
app.use(dispatch); // for routing
