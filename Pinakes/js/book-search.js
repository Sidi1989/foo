var books = [];

window.onload = function () {
  var bookSearchingInputElement = document.getElementById("bookSearchingInput");
  bookSearchingInputElement.onkeyup = function (event) {
    var userSearch = bookSearchingInputElement.value;
    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (booksFromApi) {
          var searchTableBodyElement = document.getElementById('searchTableBody');
          searchTableBodyElement.innerHTML = '';
          var filteredBooks = booksFromApi.filter(function (book, i, a) {
            return book.title.toLowerCase().startsWith(userSearch.toLowerCase())
          });
          books = filteredBooks;
          books.forEach(function (book, i) {
            const newRowElement = document.createElement('tr');
            newRowElement.innerHTML = `
                <td>
                  <a class="text-primary" href="/books/${book.id}"
                    <p>${book.title}</p>
                  </a>
                </td>
                <td>${book.author.name}</td>
                <td>${book.isbn}</td>
                <td>${book.category.name}</td>
                <td>${book.subcategory.name}</td>
                <td>${book.language.name}</td>
            `;
            searchTableBodyElement.appendChild(newRowElement);
          });
      });
  };


  var nuevoBotonElement = document.getElementById("nuevoBoton");
  nuevoBotonElement.onclick = function (event) {
      var searchTableBodyElement = document.getElementById('searchTableBody');
      searchTableBodyElement.innerHTML = '';

      var sortedBooks = _.sortBy(books, ['title'])
      sortedBooks.forEach(function (book, i) {
        const newRowElement = document.createElement('tr')
        newRowElement.innerHTML = `
            <td>
              <a class="text-primary" href="/books/${book.id}"
                <p>${book.title}</p>
              </a>
            </td>
            <td>${book.author.name}</td>
            <td>${book.isbn}</td>
            <td>${book.category.name}</td>
            <td>${book.subcategory.name}</td>
            <td>${book.language.name}</td>
        `;
        searchTableBodyElement.appendChild(newRowElement);
      });
  };
};
