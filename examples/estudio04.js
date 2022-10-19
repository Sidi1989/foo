// Ejemplo de Callback Hell; sabiendo que su signatura de función es "error-respuesta"
fs.readdir(dirname, function (err, basenames) {

  if (err) {
    console.log(`Error finding files: ${err}`);
  } else {

    var filesSized = basenames.forEach(function (basename) {
      var pathname = dirname + basename;
      gm(pathname).size(function (err, size) {

        if (err) {
          console.log(`Error identifying file size: ${err}`);
        } else {

          widths.forEach(function (width) {
            var aspect = (size.width / size.height);
            var height = Math.round(width / aspect);
            resize(width, height).write(basename, function(err, write) {

              if (err) {
                console.log(`Error writing file: ${err}`);
              } else {
                bind(write)
              }
            })
          })
        }
      })
    })
  }
});

// Tratando de superar el Callback Hell con "Promises" (.then)

fs.readdir(dirname)
  .then(function (basenames) {
    var filesSized = basenames.forEach(function (basename) {
      var pathname = dirname + basename;
      gm(pathname).size()
    })
  })
  .then(function (size) {
    widths.forEach(function (width) {
      var aspect = (size.width / size.height);
      var height = Math.round(width / aspect);
      resize(width, height).write(basename)
  })
  .then(function (write) {
    bind(write)
  }

var foo = fs.readdir(dirname);
var bar = foo.then(blabla);
var baz = bar.then(bloblo)
baz.forEach()
// No dará ningún resultado satisfactorio, porque baz dependerá
// de que termine bar, que dependerá a su vez de que termine foo.


// Solución final con "Await" (ya no devuelve una promesa, sino lo que inicialmente se buscaba)
// Pero await sólo sirve con funciones asíncronas 'async function() {}'
var foo = await fs.readdir(dirname);
var bar = await gm(foo).size();
