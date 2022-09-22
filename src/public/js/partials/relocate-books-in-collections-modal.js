var books = [];

/**
 * @description
 * listener para que, al pulsar teclas en el buscador, vayan cambiando los
 * libros que se obtienen como resultado de la búsqueda.
 */

var relocateModalSearchingListener = function () {
  var relocateBookSearchingInputNode = document.getElementById("relocate_book_searching_input");
  relocateBookSearchingInputNode.addEventListener('keyup', function () {
    var relocateUserSearch = relocateBookSearchingInputNode.value;

    var memberId = getCookie('member_id');
    var url = `/api/members/${memberId}/books`;
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var relocateSearchTableBodyNode = document.getElementById('relocate_search_table_body');
          // Limpia la Tabla, para reescribir en ella.
          relocateSearchTableBodyNode.innerHTML = '';
          // Se va consiguiendo buscar aquellos libros cuyas primeras letras
          // coinciden con las teclas pulsadas.
          //Y se evita que, al reescribir desde cero, salga toda la lista de libros.
          var searchedBooks = info.filter(function (book) {
            if (!relocateUserSearch) {
              return false;
            } else {
              return book.title.toLowerCase().startsWith(relocateUserSearch.toLowerCase())
            }
          });
          books = searchedBooks;
          books.forEach(function (book) {
            const relocateModalSearchedBookNode = document.createElement('tr');
            relocateModalSearchedBookNode.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author.name}</td>
                <td>${book.collection.name}</td>
                <td><input type="radio" name="book_to_move"></td>
            `;
            relocateSearchTableBodyNode.appendChild(relocateModalSearchedBookNode);
          });
      });
  });
};
window.addEventListener('load', relocateModalSearchingListener);


/**
 * @description
 * listener para que, al hacer click en el botón de ordenar, las búsquedas
 * realizadas se ordenen según su criterio.
 */

var relocateModalOrderingListener = function () {
  var relocateModalOrderingNode = document.getElementById("collection_order_button");
  relocateModalOrderingNode.addEventListener('click', function () {
      var relocateSearchTableBodyNode = document.getElementById('relocate_search_table_body');
      // Limpia la Tabla, para reescribir en ella.
      relocateSearchTableBodyNode.innerHTML = '';
      // Se reordenan los libros en la Tabla, volviendo a "pintarla" según
      // cómo deban disponerse los resultados de acuerdo al criterio.
      var sortedBooks = _.sortBy(books, ['collection']);
      sortedBooks.forEach(function (book) {
        const relocateModalSearchedBookNode = document.createElement('tr')
        relocateModalSearchedBookNode.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author.name}</td>
            <td>${book.collection.name}</td>
            <td><input type="radio" name="radioGroup"></td>
        `;
        relocateSearchTableBodyNode.appendChild(relocateModalSearchedBookNode);
      });
  });
};
window.addEventListener('load', relocateModalOrderingListener);
