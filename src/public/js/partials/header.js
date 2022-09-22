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

    var sessionToDelete = getCookie('session');

    var url = '/api/sessions';
    var details = {
        'session': sessionToDelete
    };
    var formBody = [];
    for (var key in details) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(details[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    var formBodyAsString = formBody.join("&");
    var options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBodyAsString
    };

    fetch(url, options)
      .then(response => response.json())
      .then(function (info) {
        if (info.status == 'KO') {
          window.alert('No se pudo borrar la sesión')
        } else {
          eraseCookie('session');
          eraseCookie('member_id');
          window.location = '/'
        }
      });
  });
};
window.addEventListener('load', signOutButtonListener);
