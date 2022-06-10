/**
 * @description
 * listener para que, al hacer click en el botón de crear libro, se guarde su
 * información, y se le asigne un id; redireccionando a su recién creado perfil
 * en la view correspondiente.
 */

var bookNewCreatingListener = function () {
  var createBookButtonNode = document.getElementById("new_book_create_button");
  createBookButtonNode.addEventListener('click', function () {

    var url = '/api/books';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      //Redirige al nuevo bookprofile creado para este nuevo libro.
      .then(info => window.location=`/books/${info.book.id}`)
  });
};
window.addEventListener('load', bookNewCreatingListener);
