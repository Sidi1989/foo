/**
 * @description
 * listener para que, al hacer click en el botón de Registrarse, se guarde la información
 * del nuevo miembro, y se le asigne un id; redireccionando a su recién creado perfil.
 */

var memberNewCreatingListener = function () {
  var createMemberButtonNode = document.getElementById("new_member_create_button");
  createMemberButtonNode.addEventListener('click', function () {

    var url = '/api/members';
    var options = {
      method: "POST",
    };

    fetch(url, options)
      .then(response => response.json())
      .then(info => window.location=`/members/${info.member.id}`)
  });
};
window.addEventListener('load', memberNewCreatingListener);
