var books = [];
var headerUserSearch;

// Listener para que, al aparecer el modal, se recuperen las letras pulsadas en el header,...
// ...así como la búsqueda asociada a dichas pulsaciones
var onModalShownListener = function () {
  var headerSearchModalNode = document.getElementById('header_search_modal');
  headerSearchModalNode.addEventListener('shown.bs.modal', function () {
    var headerModalSearchInputNode = document.getElementById('header_modal_book_searching_input');
    headerModalSearchInputNode.value = headerUserSearch;

    console.log(headerUserSearch);
    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var headerModalSearchTableBodyNode = document.getElementById('header_modal_search_table_body');
          headerModalSearchTableBodyNode.innerHTML = '';
          var headerMemberId = getCookie('member');
          var headerOwnedBooks = info.filter(book => book.owner == headerMemberId);
          var headerSearchedBooks = headerOwnedBooks.filter(function (book) {
            return book.title.toLowerCase().startsWith(headerUserSearch.toLowerCase())
          });
          books = headerSearchedBooks;
          books.forEach(function (book) {
            const headerModalSearchedBookNode = document.createElement('tr');
            headerModalSearchedBookNode.innerHTML = `
            <td>
            <a href="/books/${book.id}"
            <p>${book.title}</p>
            </a>
            </td>
            <td>${book.author.name}</td>
            <td>${book.collection.name}</td>
            `;
            headerModalSearchTableBodyNode.appendChild(headerModalSearchedBookNode);
          });
      });
  });
};
window.addEventListener('load', onModalShownListener);


// Listener para que, al pulsar teclas en el buscador, vaya cambiando el resultado de la búsqueda
var headerModalSearchingListener = function () {
  var headerModalSearchInputNode = document.getElementById("header_modal_book_searching_input");
  headerModalSearchInputNode.addEventListener('keyup', function () {
    headerModalSearchInputNode.value = headerUserSearch;

    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var headerModalSearchTableBodyNode = document.getElementById('header_modal_search_table_body');
          headerModalSearchTableBodyNode.innerHTML = '';
          var headerMemberId = getCookie('member');
          var headerOwnedBooks = info.filter(book => book.owner == headerMemberId);
          var headerSearchedBooks = headerOwnedBooks.filter(function (book) {
            return book.title.toLowerCase().startsWith(headerUserSearch.toLowerCase())
          });
          books = headerSearchedBooks;
          books.forEach(function (book) {
            const headerModalSearchedBookNode = document.createElement('tr');
            headerModalSearchedBookNode.innerHTML = `
                <td>
                  <a href="/books/${book.id}"
                    <p>${book.title}</p>
                  </a>
                </td>
                <td>${book.author.name}</td>
                <td>${book.collection.name}</td>
            `;
            headerModalSearchTableBodyNode.appendChild(headerModalSearchedBookNode);
          });
      });
  });
};
window.addEventListener('load', headerModalSearchingListener);


// Listener para que, al hacer click en el botón de ordenar, las búsquedas realizadas se ordenen según su criterio
var headerModalOrderingListener = function () {
  var headerModalOrderingNode = document.getElementById("header_modal_collection_order_button");
  headerModalOrderingNode.addEventListener('click', function () {
      var headerModalSearchTableBodyNode = document.getElementById('header_modal_search_table_body');
      headerModalSearchTableBodyNode.innerHTML = '';

      var headerSortedBooks = _.sortBy(books, ['collection']);
      headerSortedBooks.forEach(function (book) {
        const headerModalSearchedBookNode = document.createElement('tr')
        headerModalSearchedBookNode.innerHTML = `
            <td>
              <a href="/books/${book.id}"
                <p>${book.title}</p>
              </a>
            </td>
            <td>${book.author.name}</td>
            <td>${book.collection.name}</td>
        `;
        headerModalSearchTableBodyNode.appendChild(headerModalSearchedBookNode);
      });
  });
};
window.addEventListener('load', headerModalOrderingListener);
