/**
 * @description
 * listener para que, al hacer click en el botón de crear petición, se guarde su
 * información, y se le asigne un id; refrescando con toda ella la view
 * del perfil de miembro.
 */

var petitionNewCreatingListener = function () {
  var createPetitionButtonNode = document.getElementById("new_petition_create_button");
  createPetitionButtonNode.addEventListener('click', function () {

    var url = '/api/petitions';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      .then(info => window.location=`/members/${info.owner.id}`)
  });
};
window.addEventListener('load', petitionNewCreatingListener);
