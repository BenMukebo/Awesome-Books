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
      <h3>"${div.titleName}" by ${div.authorName}</h3>
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
    localStorage.setItem('storageFormData', JSON.stringify(filteredArray));
    this.createHtmlDiv(filteredArray);
  }

  addButtonFunction() {
    addButton.addEventListener('click', (e) => {
      if (this.author.value === '' || this.title.value === '') return;
      e.preventDefault();
      const localStorageObject = {
        authorName: this.author.value,
        titleName: this.title.value,
      };
      const listBooks = JSON.parse(localStorage.getItem('storageFormData')) || [];
      listBooks.push(localStorageObject);
      localStorage.setItem('storageFormData', JSON.stringify(listBooks));
      this.createHtmlDiv(listBooks);
      const message = document.querySelector('.message');
      message.innerHTML = `${this.title.value} by ${this.author.value} has been added to list of books`;
    });
  }

  onPageLoad() {
    if (this.booksList.length === 0) {
      if (JSON.parse(localStorage.getItem('storageFormData'))) {
        this.booksList = JSON.parse(localStorage.getItem('storageFormData'));
        this.createHtmlDiv(this.booksList);
      }
    }
  }
}

const newBook = new CreateBook(titleInput, authorInput);
newBook.booksList = JSON.parse(localStorage.getItem('storageFormData')) || [];
newBook.createHtmlDiv(newBook.booksList);
newBook.addButtonFunction();
window.addEventListener('load', () => {
  newBook.onPageLoad();
});