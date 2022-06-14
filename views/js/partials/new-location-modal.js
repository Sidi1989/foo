/**
 * @description
 * listener para que, al hacer click en el botón de crear sede, se guarde su
 * información, y se le asigne un id; refrescando con toda ella la view
 * de la edición del miembro.
 */

var locationNewCreatingListener = function () {
  var createLocationButtonNode = document.getElementById("new_location_create_button");
  createLocationButtonNode.addEventListener('click', function () {

    var url = '/api/locations';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      .then(info => window.location=`/members/${info.owner.id}/preferences`)
  });
};
window.addEventListener('load', locationNewCreatingListener);
