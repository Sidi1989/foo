var books = [];

// Listener para que, al pulsar teclas en el buscador, vaya cambiando el resultado de la búsqueda
var relocateModalSearchingListener = function () {
  var relocateModalSearchingInputNode = document.getElementById("relocate_book_searching_input");
  relocateModalSearchingInputNode.addEventListener('keyup', function () {
    var userSearch = relocateModalSearchingInputNode.value;

    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var relocateModalSearchTableBodyNode = document.getElementById('relocate_search_table_body');
          relocateModalSearchTableBodyNode.innerHTML = '';
          var memberId = getCookie('member');
          var ownedBooks = info.filter(book => book.owner == memberId);
          var searchedBooks = ownedBooks.filter(function (book) {
            return book.title.toLowerCase().startsWith(userSearch.toLowerCase())
          });
          books = searchedBooks;
          books.forEach(function (book) {
            const relocateModalSearchedBookNode = document.createElement('tr');
            relocateModalSearchedBookNode.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author.name}</td>
                <td>${book.collection.name}</td>
            `;
            relocateModalSearchTableBodyNode.appendChild(relocateModalSearchedBookNode);
          });
      });
  });
};
window.addEventListener('load', relocateModalSearchingListener);


// Listener para que, al hacer click en el botón de ordenar, las búsquedas realizadas se ordenen según su criterio
var relocateModalOrderingListener = function () {
  var relocateModalOrderingNode = document.getElementById("collection_order_button");
  relocateModalOrderingNode.addEventListener('click', function () {
      var relocateModalSearchTableBodyNode = document.getElementById('relocate_search_table_body');
      relocateModalSearchTableBodyNode.innerHTML = '';

      var sortedBooks = _.sortBy(books, ['collection']);
      sortedBooks.forEach(function (book) {
        const relocateModalSearchedBookNode = document.createElement('tr')
        relocateModalSearchedBookNode.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author.name}</td>
            <td>${book.collection.name}</td>
        `;
        relocateModalSearchTableBodyNode.appendChild(relocateModalSearchedBookNode);
      });
  });
};
window.addEventListener('load', relocateModalOrderingListener);
