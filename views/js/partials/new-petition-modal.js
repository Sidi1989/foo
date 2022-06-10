var petitionNewCreateListener = function (event) {
  var petitionNewCreateButtonNode = document.getElementById('new_petition_create_button');
  petitionNewCreateButtonNode.addEventListener('click', function (event) {
    console.log('hola');
  })
};
window.addEventListener("load", petitionNewCreateListener);
