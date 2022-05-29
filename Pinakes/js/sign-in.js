var introModal = new bootstrap.Modal(document.getElementById("pre_sign_in_modal"));
onReadyStateChangeListener = function () {
  introModal.show();
};
document.addEventListener('readystatechange', onReadyStateChangeListener);


var onloadListener = function () {
  var memberSignInNode = document.getElementById('sign_in_button');
  memberSignInNode.onclick = function (event) {
    var memberEmailNode = document.getElementById('sign_in_email');
    var email = memberEmailNode.value;
    var memberPasswordNode = document.getElementById('sign_in_password');
    var password = memberPasswordNode.value;
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
      .then(function (res) {return res.json()})
      .then(function (info) {
        if (info.status == 'KO') {
          window.alert('Algo ha salido mal')
        } else {
          setCookie('member', info.id, 5);
          window.location = `/members/${info.id}`;
        }
      })
  }
};
window.addEventListener('load', onloadListener);
