/**
 * @description
 * listener para que, al hacer click en el botón de búsqueda, se conserven
 * las letras pulsadas en el campo de búsqueda, como valor de la misma.
 */

var headerBookSearchingButtonListener = function () {
  var headerBookSearchingButtonNode = document.getElementById('header_book_searching_button');
  headerBookSearchingButtonNode.addEventListener('click', function () {
    var headerBookSearchingInputNode= document.getElementById('header_book_searching_input');
    headerUserSearch = headerBookSearchingInputNode.value;
  });
};
window.addEventListener('load', headerBookSearchingButtonListener);
