// Listener para que, antes de desplegarse la página, aparezca un modal (que deberá cerrarse)
var preSignInModal = new bootstrap.Modal(document.getElementById("pre_sign_in_modal"));
var onReadyStateChangeListener = function () {
  preSignInModal.show();
};
document.addEventListener('readystatechange', onReadyStateChangeListener);


// Listener para que, al hacer click en el botón de entrar, tras haber rellenado los campos de email y contraseña,...
// ...se compruebe su corrección, redireccionando o no al perfil del miembro
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
        'password': password,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    };
    formBody = formBody.join("&");
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody
    };

    fetch(url, options)
      .then(response => response.json())
      .then(function (info) {
          if (info.status == 'KO') {
            window.alert('Algo ha salido mal')
          } else {
            setCookie('member', info.id, 5);
            window.location = `/members/${info.id}`;
          }
      });
  });
};
window.addEventListener('load', memberSignInListener);
