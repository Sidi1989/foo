/**
 * @description
 * listener para que, al cargar la view de member-edit, los diversos campos con
 * información anterior sobre el usuario, susceptibles de ser editados, aparezcan
 * escritos donde proceda, según los datos que se conservan sobre dicho usuario.
 */

var memberEditLoadingListener = function () {

      var url = `/api/members/${member.id}`;
      fetch(url)
        .then(res => res.json())
        .then(function (info) {
            var nicknameNode = document.getElementById('member_edit_nickname');
            nicknameNode.value = info.nickname;
        });
};
window.addEventListener('readystatechange', memberEditLoadingListener);
