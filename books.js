let removeButton = [];
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
let booksList = [];
const bookContainer = document.getElementById('books-container');

function createHtmlDiv(listOfBooks) {
  let books = '';
  listOfBooks.forEach((div) => {
    books += `<article class="author-title-div">
    <h3 class="book-info">"${div.titleName}" by ${div.authorName}</h3>
    <div>
    <button class="remove-btn">Remove</button>
    <div>
    </article>`;
  });
  bookContainer.innerHTML = books;
  removeButton = document.querySelectorAll('button.remove-btn');
  removeButton.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      function removeBookFromCollection(id) {
        booksList = JSON.parse(localStorage.getItem('storageFormData'));
        const filteredArray = booksList.filter((book) => booksList.indexOf(book) !== id);
        localStorage.setItem('storageFormData', JSON.stringify(filteredArray));
        createHtmlDiv(filteredArray);
      }
      removeBookFromCollection(index);
    });
  });
}

const addButton = document.querySelector('.form-container .add-btn');

addButton.addEventListener('click', (e) => {
  if (authorInput.value === '' || titleInput.value === '') return;
  e.preventDefault();
  const localStorageObject = {
    authorName: authorInput.value,
    titleName: titleInput.value,
  };
  const listBooks = JSON.parse(localStorage.getItem('storageFormData')) || [];
  listBooks.push(localStorageObject);
  localStorage.setItem('storageFormData', JSON.stringify(listBooks));
  createHtmlDiv(listBooks);
  authorInput.value = '';
  titleInput.value = '';
});

function onPageLoad() {
  if (booksList.length === 0) {
    if (JSON.parse(localStorage.getItem('storageFormData'))) {
      booksList = JSON.parse(localStorage.getItem('storageFormData'));
      createHtmlDiv(booksList);
    }
  }
}

window.addEventListener('load', () => {
  onPageLoad();
});
