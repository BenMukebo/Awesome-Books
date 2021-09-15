const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const bookContainer = document.getElementById('books-container');
const addButton = document.querySelector('.form-container .add-btn');

class CreateBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.removeButton = [];
    this.booksList = [];
  }

  createHtmlDiv(listOfBooks) {
    let books = '';
    listOfBooks.forEach((div) => {
      books += `<article class="author-title-div">
      <h3>"${div.titleName}</h3>
      <h3>${div.authorName}</h3>
      <button class="remove-btn">Remove</button>
      </article>`;
    });
    bookContainer.innerHTML = books;
    this.removeButton = document.querySelectorAll('button.remove-btn');
    this.removeButton.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.removeBookFromCollection(index);
      });
    });
  }

  removeBookFromCollection(id) {
    this.booksList = JSON.parse(localStorage.getItem('storageFormData'));
    const filteredArray = this.booksList.filter((book) => this.booksList.indexOf(book) !== id);
    console.log(filteredArray);
    localStorage.setItem('storageFormData', JSON.stringify(filteredArray));
    this.createHtmlDiv(filteredArray);
  }

}