// Listener para que, al hacer click en el botón de crear libro, se guarde su información y,...
// asignándosele un id, redireccione a una página con su perfil
var bookNewCreatingListener = function () {
  var createBookButtonNode = document.getElementById("new_book_create_button");
  createBookButtonNode.addEventListener('click', function () {

    var url = '/api/books';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      .then(info => window.location=`/books/${info.book.id}`)
  });
};
window.addEventListener('load', bookNewCreatingListener);
