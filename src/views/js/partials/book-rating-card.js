/**
 * @description
 * listener para que, al hacer click en el botón de guardar cambios, se registre
 * la valoración, se le asigne una id a la review, y se refresque con todo ello
 * la view del perfil de miembro.
 */

var reviewNewCreatingListener = function () {
  var createReviewButtonNode = document.getElementById("save_review_button");
  createReviewButtonNode.addEventListener('click', function () {

    var newReviewBookRateNode = document.getElementById('book_rate_bar');
    var bookRate = newReviewBookRateNode.value;
    var newReviewCopyRateNode = document.getElementById('copy_rate_bar');
    var copyRate = newReviewCopyRateNode.value;
    var newReviewCommentNode = document.getElementById('comment_section_text');
    var comment = newReviewCommentNode.value;

    var url = '/api/reviews';
    var details = {
        'bookRate': bookRate,
        'copyRate': copyRate,
        'comment': comment
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
           window.location = `/books/${info.book.id}`;
         } else {
           window.alert('Algo ha salido mal')
         }
     });
 });
};
window.addEventListener('load', reviewNewCreatingListener);
