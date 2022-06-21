/**
 * @description
 * listener para que, al hacer click en el botón de editar libro, el modal que surja
 * para dicha edición se cargue con los datos que se conservan sobre el mismo.
 */

var editBookModalListener = function () {
    var editBookButtonNode = document.querySelectorAll('button.edit-book-button');
    editBookButtonNode.forEach(function (buttonNode) {
      buttonNode.addEventListener('click', function () {
        var editBookButtonNodeId = buttonNode.id;
        var bookId = editBookButtonNodeId.split('_')[2];

        var url = `/api/books/${bookId}`;
        fetch(url)
          .then(res => res.json())
          .then(function (info) {
              var editTitleNode = document.getElementById('edit_book_title');
              editTitleNode.value = info.title;
              var editAuthorNode = document.getElementById('edit_book_author_name');
              editAuthorNode.value = info.author;
              var editLocationNode = document.getElementById('edit_book_location');
              editLocationNode.value = info.location;
              var editCategoryNode = document.getElementById('edit_book_category');
              editCategoryNode.value = info.category;
              var editSubcategoryNode = document.getElementById('edit_book_subcategory');
              editSubcategoryNode.value = info.subcategory;
              var editLanguageNode = document.getElementById('edit_book_language');
              editLanguageNode.value = info.language;
              var editIsbnNode = document.getElementById('edit_book_isbn');
              editIsbnNode.value = info.isbn;
              var editEditorialNode = document.getElementById('edit_book_editorial');
              editEditorialNode.value = info.editorial;
              var editFormatNode = document.getElementById('edit_book_format');
              editFormatNode.value = info.format;
              var editLengthNode = document.getElementById('edit_book_dimensions_length');
              editLengthNode.value = info.length;
              var editWidthNode = document.getElementById('edit_book_dimensions_width');
              editWidthNode.value = info.width;
              var editPublishDateNode = document.getElementById('edit_book_publish_date');
              editPublishDateNode.value = info.publishDate;
              var editIssueNode = document.getElementById('edit_book_issue');
              editIssueNode.value = info.issue;
              var editPagesNode = document.getElementById('edit_book_pages');
              editPagesNode.value = info.pages;
              var editSynopsisNode = document.getElementById('edit_book_synopsis');
              editSynopsisNode.value = info.synopsis;
              var editPicNode = document.getElementById('edit_book_pic');
              editPicNode.value = info.pic;
          });
      });
    });
};
window.addEventListener('load', editBookModalListener);
