//Callback Hell

/* Con GM para tratamiento de imágenes: gm('/path/to/image.jpg')
 * Con .bind que crea una nueva función, que cuando es llamada, asigna
 * a su operador 'this' el valor entregado, con una secuencia de argumentos dados
 * precediendo a cualquiera entregados cuando la función es llamada.
 */

var files = fs.readdir(dirname, function (err, basenames) {

  if (err) {
    console.log(`Error finding files: ${err}`);
  } else {

    var filesSized = basenames.forEach(function (basename) {
      gm(dirname + basename).size(function (err, size) {

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


//Promises

var files = fs.readdir(dirname)
  .then(function (basenames) {
    var filesSized = basenames.forEach(function (basename) {
      gm(dirname + basename).size()
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


//Await

var files = async fs.readdir(dirname) {
  await
    var filesSized = basenames.forEach(function (basename) {
      gm(dirname + basename).size()
    });
  await
    widths.forEach(function (width) {
      var aspect = (size.width / size.height);
      var height = Math.round(width / aspect);
      resize(width, height).write(basename)
    });
    bind(write);
}
