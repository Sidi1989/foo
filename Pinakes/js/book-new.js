window.onload = function () {
  var createNewBookElement = document.getElementById("createNewBook");
  createNewBookElement.onclick = function (event) {
    var url = '/api/books';
    var requestInfo = {
      method: "POST",
    };
    fetch(url, requestInfo)
      .then(response => response.json())
      .then(info => window.location=`/books/${info.book}`)
  };
};
