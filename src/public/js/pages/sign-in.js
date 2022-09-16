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

            var rememberMeButtonNode = document.getElementById('remember_me_check');
            if (rememberMeButtonNode.checked) {
              localStorage.memberEmail = signInEmailNode.value;
              localStorage.rememberMeEnabled = rememberMeButtonNode.value;
            }

            window.location = `/members/${info.id}`;
          }
      });
  });
};
window.addEventListener('load', memberSignInListener);


/**
 * @description
 * listener para que, al hacer click en el botón de "Recuérdame", en caso de volver
 * a la página de SignIn, el dato del email haya quedado guardado y se rellene el
 * campo correspondiente del formulario.
 */
var rememberMeListener = function () {
  var rememberMeButtonNode = document.getElementById('remember_me_check');
  var signInEmailNode = document.getElementById('sign_in_email');

  if (localStorage.rememberMeEnabled) {
    rememberMeButtonNode.setAttribute("checked");
    signInEmailNode.value = localStorage.memberEmail;
  }

};
window.addEventListener('load', rememberMeListener);
