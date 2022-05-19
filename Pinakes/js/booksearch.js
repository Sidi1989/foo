var books = [];

window.onload = function () {
  var bookSearchingInputNode = document.getElementById("bookSearchingInput");
  bookSearchingInputNode.onkeyup = function (event) {
    var userSearch = bookSearchingInputNode.value;
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
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>${book.category}</td>
                <td>${book.subcategory}</td>
                <td>${book.language}</td>
            `;
            searchTableBodyElement.appendChild(newRowElement);
          });
      });
  };


  var nuevoBotonNode = document.getElementById("nuevoBoton");
  nuevoBotonNode.onclick = function (event) {
      var searchTableBodyElement = document.getElementById('searchTableBody');
      searchTableBodyElement.innerHTML = '';

      var sortedBooks = books.slice(0,1);
      sortedBooks.forEach(function (book, i) {
        const newRowElement = document.createElement('tr')
        newRowElement.innerHTML = `
            <td>
              <a class="text-primary" href="/books/${book.id}"
                <p>${book.title}</p>
              </a>
            </td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.category}</td>
            <td>${book.subcategory}</td>
            <td>${book.language}</td>
        `;
        searchTableBodyElement.appendChild(newRowElement);
      });
  };
};
