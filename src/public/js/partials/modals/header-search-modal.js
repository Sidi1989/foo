var books = [];
var headerUserSearch;

/**
 * @description
 * listener para que, al aparecer el modal, se recuperen las letras pulsadas
 * en el buscador del Header, así como la búsqueda asociada a dichas pulsaciones.
 */

var onModalShownListener = function () {
  var headerSearchModalNode = document.getElementById('header_search_modal');
  headerSearchModalNode.addEventListener('shown.bs.modal', function () {
    var headerModalBookSearchingInputNode = document.getElementById('header_modal_book_searching_input');
    headerModalBookSearchingInputNode.value = headerUserSearch;

    var memberId = getCookie('member_id');
    var url = `/api/members/${memberId}/books`;
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var headerModalSearchTableBodyNode = document.getElementById('header_modal_search_table_body');
          // Limpia la Tabla, para reescribir en ella.
          headerModalSearchTableBodyNode.innerHTML = '';
          // Se va consiguiendo buscar aquellos libros cuyas primeras letras
          // coinciden con las teclas pulsadas.
          //Y se evita que, al reescribir desde cero, salga toda la lista de libros.
          var headerSearchedBooks = info.filter(function (book) {
            if (!headerUserSearch) {
              return false;
            } else {
              return book.title.toLowerCase().startsWith(headerUserSearch.toLowerCase())
            }
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


/**
 * @description
 * listener para que, al pulsar teclas en el buscador, vayan cambiando los
 * libros que se obtienen como resultado de la búsqueda.
 */

var headerModalSearchingListener = function () {
  var headerModalBookSearchingInputNode = document.getElementById("header_modal_book_searching_input");
  headerModalBookSearchingInputNode.addEventListener('keyup', function () {
    headerUserSearch = headerModalBookSearchingInputNode.value;
    console.log(`headerUserSearch: ${headerUserSearch}`);

    var memberId = getCookie('member_id');
    var url = `/api/members/${memberId}/books`;
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var headerModalSearchTableBodyNode = document.getElementById('header_modal_search_table_body');
          // Limpia la Tabla, para reescribir en ella.
          headerModalSearchTableBodyNode.innerHTML = '';

          // Se va consiguiendo buscar aquellos libros cuyas primeras letras
          // coinciden con las teclas pulsadas.
          //Y se evita que, al reescribir desde cero, salga toda la lista de libros.
          var headerSearchedBooks = info.filter(function (book) {
            if (!headerUserSearch) {
              return false;
            } else {
              return book.title.toLowerCase().startsWith(headerUserSearch.toLowerCase())
            }
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


/**
 * @description
 * listener para que, al hacer click en el botón de ordenar, las búsquedas
 * realizadas se ordenen según su criterio.
 */

var headerModalOrderingListener = function () {
  var headerModalOrderingNode = document.getElementById("header_modal_collection_order_button");
  headerModalOrderingNode.addEventListener('click', function () {
      var headerModalSearchTableBodyNode = document.getElementById('header_modal_search_table_body');
      // Limpia la Tabla, para reescribir en ella.
      headerModalSearchTableBodyNode.innerHTML = '';
      // Se reordenan los libros en la Tabla, volviendo a "pintarla" según
      // cómo deban disponerse los resultados de acuerdo al criterio.
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