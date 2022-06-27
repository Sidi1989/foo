/**
 * @description
 * listener para que, antes de desplegarse la página, aparezca un modal,
 * (a pantalla completa y con el logo de Pinakes) que deberá cerrarse.
 */

var preSignInModal = new bootstrap.Modal(document.getElementById("pre_sign_in_modal"));
var onReadyStateChangeListener = function () {
  preSignInModal.show();
};
document.addEventListener('readystatechange', onReadyStateChangeListener);


/**
 * @description
 * listener para que, al volver a la página, si anteriormente (y en tanto no haya
 * expirado la cookie de la session) se hubiera marcado la opción de "Remember Me",
 * se muestren el email y la contraseña con que entró el usuario en aquella
 * ocasión previa.
 */

 /*
 var rememberMeListener = function () {
   var signInRememberMeNode = document.getElementById('remember_me_check');
   if ()
   var preSignInModal = new bootstrap.Modal(document.getElementById("pre_sign_in_modal"));

       var url = `/api/members/${memberId}`;
       fetch(url)
         .then(res => res.json())
         .then(function (info) {
             var signInEmailNode = document.getElementById('sign_in_email');
             signInEmailNode.value = info.email;
             var signInPasswordNode = document.getElementById('sign_in_password');
             signInPasswordNode.value = info.email;
         });
 };
 window.addEventListener('load', rememberMeListener);
 */


/**
 * @description
 * listener para que, al hacer click en el botón de entrar, tras haber rellenado
 * los campos de email y contraseña, se compruebe su adecuación con los datos de
 * algún usuario, redirigiendo, en tal caso, a su perfil de miembro.
 */

var memberSignInListener = function () {
  var signInButtonNode = document.getElementById('sign_in_button');
  signInButtonNode.addEventListener('click', function () {
    var signInEmailNode = document.getElementById('sign_in_email');
    var email = signInEmailNode.value;
    var signInPasswordNode = document.getElementById('sign_in_password');
    var password = signInPasswordNode.value;

    var url = '/api/sessions';
    var details = {
        'email': email,
        'password': password
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
          if (info.status == 'KO') {
            window.alert('Algo ha salido mal')
          } else {
            setCookie('session', info.id, 5);
            window.location = `/members/${info.id}`;
          }
      });
  });
};
window.addEventListener('load', memberSignInListener);
