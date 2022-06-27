/**
 * @description
 * listener para que, al terminar de escribir una contraseña, se verifique si cumple
 * con los requisitos alfanuméricos que explica su placeholder; alertando de ello
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
      return false;
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
