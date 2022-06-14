var books = [];

/**
 * @description
 * listener para que, al pulsar teclas en el buscador, vayan cambiando los
 * libros que se obtienen como resultado de la búsqueda.
 */

var relocateModalSearchingListener = function () {
  var relocateModalSearchingInputNode = document.getElementById("relocate_book_searching_input");
  relocateModalSearchingInputNode.addEventListener('keyup', function () {
    var userSearch = relocateModalSearchingInputNode.value;

    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var relocateModalSearchTableBodyNode = document.getElementById('relocate_search_table_body');
          // Limpia la Tabla, para reescribir en ella.
          relocateModalSearchTableBodyNode.innerHTML = '';
          // Se reducen los posibles resultados de la búsqueda a sólo aquellos
          // libros que pertenecieran al miembro.
          var memberId = getCookie('member');
          var ownedBooks = info.filter(book => book.owner == memberId);
          // Se va consiguiendo buscar aquellos libros cuyas primeras letras
          // coinciden con las teclas pulsadas.
          var searchedBooks = ownedBooks.filter(function (book) {
            return book.title.toLowerCase().startsWith(userSearch.toLowerCase())
          });
          books = searchedBooks;
          books.forEach(function (book) {
            const relocateModalSearchedBookNode = document.createElement('tr');
            relocateModalSearchedBookNode.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author.name}</td>
                <td>${(book.collection)? book.collection.name : 'Sin Colección'}</td>
            `;
            // Se ha aplicado un operador ternario ante la posibilidad de que
            // el libro no estuviera incluido en una Colección concreta.
            relocateModalSearchTableBodyNode.appendChild(relocateModalSearchedBookNode);
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
      var relocateModalSearchTableBodyNode = document.getElementById('relocate_search_table_body');
      // Limpia la Tabla, para reescribir en ella.
      relocateModalSearchTableBodyNode.innerHTML = '';
      // Se reordenan los libros en la Tabla, volviendo a "pintarla" según
      // cómo deban disponerse los resultados de acuerdo al criterio.
      var sortedBooks = _.sortBy(books, ['collection']);
      sortedBooks.forEach(function (book) {
        const relocateModalSearchedBookNode = document.createElement('tr')
        relocateModalSearchedBookNode.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author.name}</td>
            <td>${(book.collection)? book.collection.name : 'Sin Colección'}</td>
        `;
        // Se ha aplicado un operador ternario ante la posibilidad de que
        // el libro no estuviera incluido en una Colección concreta.
        relocateModalSearchTableBodyNode.appendChild(relocateModalSearchedBookNode);
      });
  });
};
window.addEventListener('load', relocateModalOrderingListener);
