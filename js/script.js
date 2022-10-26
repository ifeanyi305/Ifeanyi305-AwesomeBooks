/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Validating form

// ====== Handle local Storage =====

class Store {
  static getBooks() {
    let bookInputs;
    if (localStorage.getItem('bookInputs') === null) {
      bookInputs = [];
    } else {
      bookInputs = JSON.parse(localStorage.getItem('bookInputs'));
    }
    return bookInputs;
  }
}

// ==== Handle UI ====

class page {
  static displayBooks() {
    const newBooks = Store.getBooks();
    newBooks.forEach((books) => page.bookList(books));
  }

  static bookList(books) {
    const list = document.getElementById('book-collection');
    const create = document.createElement('div');
    create.className = 'list-control';
    create.innerHTML = `
    <p>${books.title} <b>By</b> ${books.author}</p>
      <button class="remove-btn">Remove</button>
    `;
    list.appendChild(create);
  }

  static deleteBook(target) {
    if (target.classList.contains('remove-btn')) {
      target.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', page.awesomeBooks);

document.querySelector('#add-button').addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = this.title;
  const bookAuthor = this.author;
  if (bookTitle.value && bookAuthor.value) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const books = new Book(title, author);
    page.bookList(books);
  }
  // to clear fields
  page.clearFields();

  // to remove a book
  document.querySelector('#book-collection').addEventListener('click', (e) => {
    page.deleteBook(e.target);
  });
});