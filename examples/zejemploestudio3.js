
app.get('/', (req, res) => {
  res.send('I am root')
});


var resumida = function (req, res) {
  res.send("Hello");
};
app.get('/hello', resumida);



var complicada = (req, res) => {
  var pathname = `${__dirname}/../Pinakes/html/userhome.html`;
  var info = {
    username: req.params.user
  }
  res.render(pathname, info);
};
app.get('/users/:user', complicada);
