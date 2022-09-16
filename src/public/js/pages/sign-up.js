/**
 * @description
 * listener para que, al terminar de escribir una contraseña, se verifique si cumple
 * con los requisitos alfanuméricos que explica su placeholder; alertando de ello
 * en caso contrario, con un cambio de color en el filler.
 */

var passwordPatternListener = function () {
  var pattern = new RegExp("[a-z,A-Z,\\d]{8,20}");
  var password = document.getElementById("sign_up_password");
  password.addEventListener('keyup', function () {
    if (pattern.test(password.value)) {
      password.classList.remove("erroneous");
      password.classList.add("successful");
    } else {
      password.classList.remove("successful");
      password.classList.add("erroneous");
    }
  })
};
window.addEventListener('load', passwordPatternListener);


/**
 * @description
 * listener para que, al escribir la confirmación de la contraseña, se verifique si
 * coincide con la antes escrita; alertando de ello en caso contrario, con un cambio
 * de color en el filler.
 */

var passwordMatchListener = function () {
  var password = document.getElementById("sign_up_password");
  var passwordConfirmation = document.getElementById("sign_up_password_confirmation");
  passwordConfirmation.addEventListener('keyup', function () {
    if (password.value != passwordConfirmation.value) {
      passwordConfirmation.classList.remove("successful");
      passwordConfirmation.classList.add("erroneous");
    } else {
      passwordConfirmation.classList.remove("erroneous");
      passwordConfirmation.classList.add("successful");
    }
  })
};
window.addEventListener('load', passwordMatchListener);


/**
 * @description
 * listener para que, al hacer click en el botón de Registrarse, se guarde la información
 * del nuevo miembro, y se le asigne un id; redireccionando a su recién creado perfil.
 */

var memberNewCreatingListener = function () {
  var createMemberButtonNode = document.getElementById("sign_up_button");
  createMemberButtonNode.addEventListener('click', function () {
    var signUpNicknameNode = document.getElementById('sign_up_nickname');
    var nickname = signUpNicknameNode.value;
    var signUpEmailNode = document.getElementById('sign_up_email');
    var email = signUpEmailNode.value;
    var signUpPasswordNode = document.getElementById('sign_up_password');
    var password = signUpPasswordNode.value;

    var url = '/api/members';
    var details = {
        'nickname': nickname,
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

    if(!details.nickname || !details.email || !details.password) {
      window.alert('Falta un campo por rellenar');
      return
    }

    fetch(url, options)
      .then(response => response.json())
      .then(function (info) {
          if (info.status == 'OK') {
            window.location = `/members/${info.member.id}`;
          } else {
            window.alert('Algo ha salido mal')
          }
      });
  });
};
window.addEventListener('load', memberNewCreatingListener);
