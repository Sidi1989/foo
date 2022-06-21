/**
 * @description
 * listener para que, al hacer click en alguno de los botones de editar la sede correspondiente,
 * distinguidos por encontrarse la id de cada sede en el tercer segmento, separados por "_", del id del botón,
 * el modal para la dicha edición se cargue con los datos que se conservan sobre la sede correspondiente.
 */

var editLocationModalListener = function () {
  var editLocationButtonsNodes = document.querySelectorAll('button.edit-location-button');
  editLocationButtonsNodes.forEach(function (buttonNode) {
    buttonNode.addEventListener('click', function () {
      var editLocationButtonNodeId = buttonNode.id;
      var locationId = editLocationButtonNodeId.split('_')[2];

      var url = `/api/locations/${locationId}`;
      fetch(url)
        .then(res => res.json())
        .then(function (info) {
            var editNameNode = document.getElementById('edit_location_name');
            editNameNode.value = info.name;
            var editPicNode = document.getElementById('edit_location_pic');
            editPicNode.value = info.pic;
        });
    });
  });
};
window.addEventListener('load', editLocationModalListener);


/**
 * @description
 * listener para que, al hacer click en el botón de crear sede, se guarde su
 * información, y se le asigne un id; refrescando con toda ella la view
 * de la edición del miembro.
 */

var locationNewCreatingListener = function () {
  var createLocationButtonNode = document.getElementById("new_location_create_button");
  createLocationButtonNode.addEventListener('click', function () {
    var newLocationNameNode = document.getElementById('new_location_name');
    var name = newLocationNameNode.value;
    var newLocationPicNode = document.getElementById('new_location_pic');
    var pic = newLocationPicNode.value;

    var url = '/api/locations';
    var details = {
        'name': name,
        'pic': pic
    };
    var formBody = [];
    for (var key in details) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(details[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    var formBodyAsString = formBody.join("&");
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBodyAsString
    };

    fetch(url, options)
      .then(response => response.json())
      .then(function (info) {
          if (info.status == 'OK') {
            location.reload();
          } else {
            window.alert('Algo ha salido mal')
          }
      });
  });
};
window.addEventListener('load', locationNewCreatingListener);
