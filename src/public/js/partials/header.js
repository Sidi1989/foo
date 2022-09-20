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


/**
 * @description
 * listener para que, al hacer click en el botón de cerrar sesión, redirija al
 * landing, con la eliminación de la cookie "session" existente hasta entonces.
 */

var signOutButtonListener = function () {
  var signOutButtonNode = document.getElementById('sign_out_button');
  signOutButtonNode.addEventListener('click', function () {
    eraseCookie('session');
    eraseCookie('member_id');
    
    window.location = '/'
  });
};
window.addEventListener('load', signOutButtonListener);
