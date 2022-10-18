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
