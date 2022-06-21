/**
 * @description
 * listener para que, al hacer click en el botón de editar colección, el modal que surja
 * para dicha edición se cargue con los datos que se conservan sobre el mismo.
 */

var editCollectionModalListener = function () {

  var editCollectionButtonNode = document.querySelectorAll('button.edit-collection-button');
  editCollectionButtonNode.forEach(function (buttonNode) {
    buttonNode.addEventListener('click', function () {
      var editCollectionButtonNodeId = buttonNode.id;
      var collectionId = editCollectionButtonNodeId.split('_')[2];

      var url = `/api/collections/${collectionId}`;
      fetch(url)
        .then(res => res.json())
        .then(function (info) {
            var editNameNode = document.getElementById('edit_collection_name');
            editNameNode.value = info.name;
            var editPicNode = document.getElementById('edit_collection_pic');
            editPicNode.value = info.pic;
        });
    });
  });
};
window.addEventListener('load', editCollectionModalListener);
