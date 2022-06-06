var books = [];

// Listener para que, al pulsar teclas en el buscador, vaya cambiando el resultado de la búsqueda
var bookSearchingListener = function () {
  var bookSearchingInputNode = document.getElementById("book_searching_input");
  bookSearchingInputNode.addEventListener('keyup', function () {
    var userSearch = bookSearchingInputNode.value;

    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var searchTableBodyNode = document.getElementById('search_table_body');
          searchTableBodyNode.innerHTML = '';
          var filteredBooks = info.filter(function (book) {
            return book.title.toLowerCase().startsWith(userSearch.toLowerCase())
          });
          books = filteredBooks;
          books.forEach(function (book) {
            const searchedBookNode = document.createElement('tr');
            searchedBookNode.innerHTML = `
                <td>
                  <a href="/books/${book.id}"
                    <p>${book.title}</p>
                  </a>
                </td>
                <td>${book.author.name}</td>
            `;
            searchTableBodyNode.appendChild(searchedBookNode);
          });
      });
  });
};
window.addEventListener('load', bookSearchingListener);


// Listener para que, al hacer click en el botón de ordenar, las búsquedas realizadas se ordenen según su criterio
var orderingListener = function () {
  var orderingNode = document.getElementById("ordering_button");
  orderingNode.addEventListener('click', function () {
      var searchTableBodyNode = document.getElementById('search_table_body');
      searchTableBodyNode.innerHTML = '';

      var sortedBooks = _.sortBy(books, ['title']);
      sortedBooks.forEach(function (book) {
        const searchedBookNode = document.createElement('tr')
        searchedBookNode.innerHTML = `
            <td>
              <a href="/books/${book.id}"
                <p>${book.title}</p>
              </a>
            </td>
            <td>${book.author.name}</td>
        `;
        searchTableBodyNode.appendChild(searchedBookNode);
      });
  });
};
window.addEventListener('load', orderingListener);
