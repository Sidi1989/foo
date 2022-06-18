/**
 * @description
 * listener para que, al hacer click en el botón de editar colección, el modal que surja
 * para dicha edición se cargue con los datos que se conservan sobre el mismo.
 */

var editCollectionModalListener = function () {
  var editColectionSaveChangesButtonsNode = document.getElementById('edit_collection_save_button');
  editColectionSaveChangesButtonsNode.addEventListener('click', function () {

      var url = `/api/members/${ownerId}/${collectionId}`;
      fetch(url)
        .then(res => res.json())
        .then(function (info) {
            var editNameNode = document.getElementById('edit_collection_name');
            editNameNode.value = info.name;
            var editPicNode = document.getElementById('edit_collection_pic');
            editPicNode.value = info.pic;
        });
    });
};
window.addEventListener('load', editCollectionModalListener);
