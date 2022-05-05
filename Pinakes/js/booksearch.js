window.onload = function () {
  var element = document.getElementById("bookSearchingInput");
  element.onkeyup = function (event) {
    var userSearch = element.value;
    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (books) {
          var filteredBooks = books.filter(function (book, i, a) {
            return book.title.toLowerCase().startsWith(userSearch.toLowerCase())
          });
          console.log(filteredBooks);
      });
  };
};
