var onclickListener = function () {
  var createBookNode = document.getElementById("new_book_create_button");
  createBookNode.onclick = function (event) {
    var url = '/api/books';
    var requestInfo = {
      method: "POST",
    };

    fetch(url, requestInfo)
      .then(response => response.json())
      .then(info => window.location=`/books/${info.book.id}`)
  };
};
window.addEventListener('click', onclickListener);
