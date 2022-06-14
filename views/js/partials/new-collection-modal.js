/**
 * @description
 * listener para que, al hacer click en el botón de crear colección, se guarde su
 * información, y se le asigne un id; redireccionando a su recién creado perfil
 * en la view correspondiente.
 */

var collectionNewCreatingListener = function () {
  var createCollectionButtonNode = document.getElementById("new_collection_create_button");
  createCollectionButtonNode.addEventListener('click', function () {

    var url = '/api/collections';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      .then(info => window.location=`/members/${info.owner.id}/${info.collection.id}`)
  });
};
window.addEventListener('load', collectionNewCreatingListener);
