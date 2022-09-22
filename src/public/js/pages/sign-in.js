/**
 * @description
 * listener para que, de haber hecho click durante una sesión anterior
 * en el botón de "Recuerda mi email", se autorrellene el campo de
 * nombre de usuario.
 */

var autoFillListener = function () {
   var emailFilled = getCookie('email');
   var signInEmailNode = document.getElementById('sign_in_email');
   signInEmailNode.value = emailFilled;

   var rememberMeFilled = getCookie('remember_me');
   var signInRememberMeNode = document.getElementById('remember_my_email_check');
   signInRememberMeNode.checked = rememberMeFilled
};
window.addEventListener('load', autoFillListener);


/**
 * @description
 * listener para que, al hacer click en el botón de entrar, tras haber rellenado
 * los campos de email y contraseña, se compruebe su adecuación con los datos de
 * algún usuario, redirigiendo, en tal caso, a su perfil de miembro.
 */

var memberSignInListener = function () {
  var signInButtonNode = document.getElementById('sign_in_button');
  signInButtonNode.addEventListener('click', function () {

    var signInFormNode = document.getElementById('sign_in_form');
    if (!signInFormNode.checkValidity()) {
      signInFormNode.classList.add('was-validated');
      event.preventDefault()
      //event.stopPropagation()
    } else {
      signInFormNode.classList.add('was-validated');

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
            window.alert(`${info.message}`)
          } else {
            setCookie('session', info.session, 5);
            setCookie('member_id', info.member.id, 5);
            var rememberMyEmailButtonNode = document.getElementById('remember_my_email_check');
            if (rememberMyEmailButtonNode.checked){
              setCookie('email', email, 5);
              setCookie('remember_me', true, 5)
            } else {
              eraseCookie('email');
              eraseCookie('remember_me')
            }

          window.location = `/members/${info.member.id}`;
          }
      });
    }
  });
};
window.addEventListener('load', memberSignInListener);
