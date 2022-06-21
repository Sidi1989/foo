/**
 * @description
 * listener para que, al hacer click en el botón de crear libro, se guarde su
 * información, y se le asigne un id; redireccionando a su recién creado perfil
 * en la view correspondiente.
 */

 var bookNewCreatingListener = function () {
   var createBookButtonNode = document.getElementById("new_book_create_button");
   createBookButtonNode.addEventListener('click', function () {
     var newBookTitleNode = document.getElementById('new_book_title');
     var title = newBookTitleNode.value;
     var newBookAuthorNode = document.getElementById('new_book_author_name');
     var author = newBookAuthorNode.value;
     var newBookLocationNode = document.getElementById('new_book_location');
     var location = newBookLocationNode.value;
     var newBookCategoryNode = document.getElementById('new_book_category');
     var category = newBookCategoryNode.value;
     var newBookSubcategoryNode = document.getElementById('new_book_subcategory');
     var subcategory = newBookSubcategoryNode.value;
     var newBookLanguageNode = document.getElementById('new_book_language');
     var language = newBookLanguageNode.value;
     var newBookIsbnNode = document.getElementById('new_book_isbn');
     var isbn = newBookIsbnNode.value;
     var newBookEditorialNode = document.getElementById('new_book_editorial');
     var editorial = newBookEditorialNode.value;
     var newBookFormatNode = document.getElementById('new_book_format');
     var format = newBookFormatNode.value;
     var newBookLengthNode = document.getElementById('new_book_dimensions_length');
     var length = newBookLengthNode.value;
     var newBookWidthNode = document.getElementById('new_book_dimensions_width');
     var width = newBookWidthNode.value;
     var newBookPublishDateNode = document.getElementById('new_book_publish_date');
     var publishDate = newBookPublishDateNode.value;
     var newBookIssueNode = document.getElementById('new_book_issue');
     var issue = newBookIssueNode.value;
     var newBookPagesNode = document.getElementById('new_book_pages');
     var pages = newBookPagesNode.value;
     var newBookSynopsisNode = document.getElementById('new_book_synopsis');
     var synopsis = newBookSynopsisNode.value;
     var newBookPicNode = document.getElementById('new_book_pic');
     var pic = newBookPicNode.value;

     var url = '/api/books';
     var details = {
         'title': title,
         'author': author,
         'location': location,
         'category': category,
         'subcategory': subcategory,
         'language': language,
         'isbn': isbn,
         'editorial': editorial,
         'format': format,
         'length': length,
         'width': width,
         'publishDate': publishDate,
         'issue': issue,
         'pages': pages,
         'synopsis': synopsis,
         'pic': pic
     };
     var formBody = [];
     for (var key in details) {
       var encodedKey = encodeURIComponent(key);
       var encodedValue = encodeURIComponent(details[key]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     var formBodyAsString = formBody.join("&");
     var options = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: formBodyAsString
     };

     fetch(url, options)
       .then(response => response.json())
       .then(function (info) {
           if (info.status == 'OK') {
             window.location = `/books/${info.book.id}`;
           } else {
             window.alert('Algo ha salido mal')
           }
       });
   });
 };
 window.addEventListener('load', bookNewCreatingListener);
