window.onload = function () {
  var bookSearchingInputNode = document.getElementById("bookSearchingInput");
  bookSearchingInputNode.onkeyup = function (event) {
    var userSearch = bookSearchingInputNode.value;
    var url = '/api/books';
    fetch(url)
      .then(response => response.json())
      .then(function (books) {
          var searchTableBodyElement = document.getElementById('searchTableBody');
          searchTableBodyElement.innerHTML = '';
          var filteredBooks = books.filter(function (book, i, a) {
            return book.title.toLowerCase().startsWith(userSearch.toLowerCase())
          });
          filteredBooks.forEach(function (book, i) {
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
      });
  };
};
