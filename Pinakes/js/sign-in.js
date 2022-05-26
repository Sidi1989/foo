window.onload = function () {
  var memberLoginNode = document.getElementById('memberLogin');
  memberLogin.onclick = function (event) {
    var memberEmailNode = document.getElementById('memberEmail');
    var memberPasswordNode = document.getElementById('memberPassword');
    var email = memberEmailNode.value;
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
    }
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
          window.alert('Eres un cenutrio')
        } else {
          setCookie('user', info.id, 5);
          window.location = `/members/${info.id}`;
        }
      })
  }
};
