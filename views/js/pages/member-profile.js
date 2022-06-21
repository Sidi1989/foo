/**
 * @description
 * listener para que, al hacer click en el botón de crear colección, se guarde su
 * información, y se le asigne un id; refrescando la página del perfil del miembro
 * con los datos de la colección recién creada.
 */

 var collectionNewCreatingListener = function () {
   var createCollectionButtonNode = document.getElementById("new_collection_create_button");
   createCollectionButtonNode.addEventListener('click', function () {
     var newCollectionNameNode = document.getElementById('new_collection_name');
     var name = newCollectionNameNode.value;
     var newCollectionPicNode = document.getElementById('new_collection_pic');
     var pic = newCollectionPicNode.value;

     var url = '/api/collections';
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
 window.addEventListener('load', collectionNewCreatingListener);


/**
 * @description
 * listener para que, al hacer click en el botón de crear petición, se guarde su
 * información, y se le asigne un id; refrescando la página del perfil del miembro
 * con los datos de la petición recién creada.
 */

 var petitionNewCreatingListener = function () {
   var createPetitionButtonNode = document.getElementById("new_petition_create_button");
   createPetitionButtonNode.addEventListener('click', function () {
     var newPetitionTitleNode = document.getElementById('new_petition_title');
     var title = newPetitionTitleNode.value;
     var newPetitionAuthorNode = document.getElementById('new_petition_author_name');
     var author = newPetitionAuthorNode.value;
     var newPetitionCategoryNode = document.getElementById('new_petition_category');
     var category = newPetitionCategoryNode.value;
     var newPetitionSubcategoryNode = document.getElementById('new_petition_subcategory');
     var subcategory = newPetitionSubcategoryNode.value;
     var newPetitionLanguageNode = document.getElementById('new_petition_language');
     var language = newPetitionLanguageNode.value;
     var newPetitionShoppingLinkNode = document.getElementById('new_petition_shopping_link');
     var shoppingLink = newPetitionShoppingLinkNode.value;

     var url = '/api/petitions';
     var details = {
         'title': title,
         'author': author,
         'category': category,
         'subcategory': subcategory,
         'language': language,
         'shoppingLink': shoppingLink
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
 window.addEventListener('load', petitionNewCreatingListener);


/**
 * @description
 * listener para que, al hacer click en alguno de los botones de editar la petición correspondiente,
 * distinguidos por encontrarse la id de cada petición en el tercer segmento, separados por "_", del id del botón,
 * el modal para la dicha edición se cargue con los datos que se conservan sobre la petición correspondiente.
 */

var editPetitionModalListener = function () {
  var editPetitionButtonsNodes = document.querySelectorAll('button.edit-petition-button');
  editPetitionButtonsNodes.forEach(function (buttonNode) {
    buttonNode.addEventListener('click', function () {
      var editPetitionButtonNodeId = buttonNode.id;
      var petitionId = editPetitionButtonNodeId.split('_')[2];

      var url = `/api/petitions/${petitionId}`;
      fetch(url)
        .then(res => res.json())
        .then(function (info) {
            var editTitleNode = document.getElementById('edit_petition_title');
            editTitleNode.value = info.title;
            var editAuthorNode = document.getElementById('edit_petition_author_name');
            editAuthorNode.value = info.author;
            var editCategoryNode = document.getElementById('edit_petition_category');
            editCategoryNode.value = info.category;
            var editSubcategoryNode = document.getElementById('edit_petition_subcategory');
            editSubcategoryNode.value = info.subcategory;
            var editLanguageNode = document.getElementById('edit_petition_language');
            editLanguageNode.value = info.language;
            var editShoppingLinkNode = document.getElementById('edit_petition_shopping_link');
            editShoppingLinkNode.value = info.shoppingLink;
        });
    });
  });
};
window.addEventListener('load', editPetitionModalListener);
