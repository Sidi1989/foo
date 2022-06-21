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
