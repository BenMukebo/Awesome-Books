const listLink = document.querySelector('.list');
const addBookLink = document.querySelector('.add-new');
const contactLink = document.querySelector('.contacts');
const mainContainer = document.getElementById('container');
const listBookContainer = document.getElementById('list-books');
const formContainer = document.getElementById('awesome-forms');
const contactContainer = document.getElementById('contact-div');

function displayListOfBooks() {
  listBookContainer.style.display = 'block';
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  listLink.style.color = 'blue';
  addBookLink.style.color = 'black';
  contactLink.style.color = 'black';
}

function displayAddFormDiv() {
  formContainer.style.display = 'block'
  listBookContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  addBookLink.style.color = 'blue';
  listLink.style.color = 'black';
  contactLink.style.color = 'black';
}

