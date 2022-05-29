var books = [];

var searchingListener = function () {
  var bookSearchingInputNode = document.getElementById("book_searching_input");
  bookSearchingInputNode.onkeyup = function (event) {
    var userSearch = bookSearchingInputNode.value;
    var url = '/api/books';

    fetch(url)
      .then(response => response.json())
      .then(function (info) {
          var searchTableBodyNode = document.getElementById('search_table_body');
          searchTableBodyNode.innerHTML = '';
          var filteredBooks = info.filter(function (book, i, a) {
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
            `;
            searchTableBodyNode.appendChild(newRowElement);
          });
      });
  }
};
window.addEventListener('load', searchingListener);


var onclickListener = function () {
  var alphabeticalNode = document.getElementById("alphabetical_button");
  alphabeticalNode.onclick = function (event) {
      var searchTableBodyNode = document.getElementById('search_table_body');
      searchTableBodyNode.innerHTML = '';

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
        `;
        searchTableBodyNode.appendChild(newRowElement);
      });
  };
};
window.addEventListener('click', onclickListener);
