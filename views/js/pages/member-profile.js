/**
 * @description
 * listener para que, al hacer click en alguno de los botones de editar la petición correspondiente,
 * distinguidos por encontrarse la id de cada petición en el tercer segmento, separados por "_", del id del botón,
 * el modal para la dicha edición se cargue con los datos que se conservan sobre la petición correspondiente.
 */
 
var editPetitionModalListener = function () {
  var editPetitionButtonsNodes = document.querySelectorAll('button.edit-petition-button');
  editPetitionButtonsNodes.forEach( function (buttonNode) {
    buttonNode.addEventListener('click', function () {
      var editPetitionButtonNodeId = buttonNode.id;
      var petitionId = editPetitionButtonNodeId.split('_')[2]

      var url = `/api/petitions/${petitionId}`;
      fetch(url)
        .then(res => res.json())
        .then(function (info) {
            var editTitleNode = document.getElementById('edit_petition_title');
            editTitleNode.value = info.title;
        });
    });
  });
};
window.addEventListener('load', editPetitionModalListener);
