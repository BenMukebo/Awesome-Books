let removeButton = [];
const awesomeBookForms = document.getElementById('awesome-forms');
let titleInput = document.getElementById('title');
let authorInput= document.getElementById('author');
let titleAuthorObject = [];
const bookContainer = document.getElementById('books-container');

function removeBookFromCollection(id) {
  console.log(id);
  titleAuthorObject = JSON.parse(localStorage.getItem('storageFormData'));
  const filteredArray = titleAuthorObject.filter((book) => titleAuthorObject.indexOf(book) !== id);
  localStorage.setItem('storageFormData', JSON.stringify(filteredArray));  
  createHtmlDiv(filteredArray);
}


function createHtmlDiv(listOfBooks) {
  let books= '';
  listOfBooks.forEach((div) => {
    books += `<article class="author-title-div">
    <h3>${div.authorName}</h3>
    <h3>${div.titleName}</h3>
    <button class="remove-btn">Remove</button>
    <hr>
    </article>`; 
  });
  bookContainer.innerHTML = books;
  removeButton = document.querySelectorAll('button.remove-btn');
  removeButton.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      removeBookFromCollection(index);
    });
  });
}