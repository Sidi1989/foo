var onclickListener = function () {
  var editPetitionButtonsNodes = document.querySelectorAll('button.edit-petition-button');
  editPetitionButtonsNodes.forEach( function (e,i) {
    e.addEventListener('click', function (event) {
      var editPetitionButtonNodeId = e.id;
      var petitionId = editPetitionButtonNodeId.split('_')[2]
      var url = `/api/petitions/${petitionId}`;

      fetch(url)
        .then(res => res.json())
        .then(function (info) {
          var titleNode = document.getElementById('edit_petition_title');
          titleNode.value = info.title;
          console.log(info)
        })
    })
  })
};
window.addEventListener('load', onclickListener);
