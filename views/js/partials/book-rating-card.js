/**
 * @description
 * listener para que, al hacer click en el botón de guardar cambios, se registre
 * la valoración, se le asigne una id a la review, y se refresque con todo ello
 * la view del perfil de miembro.
 */

var reviewNewCreatingListener = function () {
  var createReviewButtonNode = document.getElementById("new_review_create_button");
  createReviewButtonNode.addEventListener('click', function () {

    var url = '/api/reviews';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      .then(info => window.location=`/members/${info.reviewer.id}`)
  });
};
window.addEventListener('load', reviewNewCreatingListener);
