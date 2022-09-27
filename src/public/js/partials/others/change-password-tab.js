/**
 * @description
 * listener para que, al terminar de escribir una contraseña, se verifique si cumple
 * con los requisitos alfanuméricos que explica su placeholder; alertando de ello,
 * en caso contrario, con un cambio de color en el filler.
 */

var newPasswordAcceptableListener = function () {
  var pattern = new RegExp("[a-z,A-Z,\\d]{8,20}");
  var newPassword = document.getElementById("new_password");
  newPassword.addEventListener('keyup', function () {
    if (pattern.test(newPassword.value)) {
      newPassword.style.borderColor = "green";
      newPassword.style.color = "green";
    } else {
      newPassword.style.borderColor = "red";
      newPassword.style.color = "red";
    }
  })
};
window.addEventListener('load', newPasswordAcceptableListener);


/**
 * @description
 * listener para que, al escribir la confirmación de la contraseña, sólo se coloree
 * de verde el campo cuando coincida con la contraseña arriba escrita.
 */

var newPasswordConfirmingListener = function () {
  var newPassword = document.getElementById("new_password");
  var newPasswordConfirmed = document.getElementById("new_password_confirmed");
  newPasswordConfirmed.addEventListener('keyup', function () {
    if (newPassword.value != newPasswordConfirmed.value) {
      newPasswordConfirmed.style.borderColor = "red";
      newPasswordConfirmed.style.color = "red";
    } else {
      newPasswordConfirmed.style.borderColor = "green";
      newPasswordConfirmed.style.color = "green";
    }
  })
};
window.addEventListener('load', newPasswordConfirmingListener);


/**
 * @description
 * listener para que, al hacer click en el botón de cambiar contraseña,
 * se guarde la nueva en el json del miembro correspondiente,
 * sustituyendo a la anterior.


 var changePasswordListener = function () {
   var changePasswordButtonNode = document.getElementById("change_password_save_button");
   changePasswordButtonNode.addEventListener('click', function () {
     var oldPasswordNode = document.getElementById('old_password');
     var oldPassword = oldPasswordNode.value;

     var newPasswordNode = document.getElementById('new_password');
     var newPassword = newPasswordNode.value;

     var url = '/:member';
     var details = {
         'password': newPassword,
     };
     var formBody = [];
     for (var key in details) {
       var encodedKey = encodeURIComponent(key);
       var encodedValue = encodeURIComponent(details[key]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     var formBodyAsString = formBody.join("&");
     var options = {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: formBodyAsString
     };

     fetch(url, options)
       .then(response => response.json())
       .then(function (info) {

       });
   });
 };
 window.addEventListener('load', changePasswordListener);
 */
