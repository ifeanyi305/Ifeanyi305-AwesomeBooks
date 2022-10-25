// Create array of books
// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const addBook = document.querySelector('#book-collection');
// const btn = document.querySelector('#add-button');

// if (!localStorage.getItem('bookInfo')) {
//   localStorage.setItem('bookInfo', JSON.stringify([]));
// }

// let books;

// function saveBooks(book) {
//   localStorage.setItem('bookInfo', JSON.stringify(book));
// }

// function displayBook() {
//   books = JSON.parse(localStorage.getItem('bookInfo'));
  // eslint-disable-next-line no-use-before-define
//   userInterface();
// }
// displayBook();

// function removeBook() {
//   books.splice(this, 1);
//   saveBooks(books);
//   displayBook();
// }

// function userInterface() {
//   addBook.innerHTML = '';
//   books.forEach((data, index) => {
//     const newBook = document.createElement('div');
//     newBook.classList.add('new-book');
//     const text = document.createElement('p');
//     text.textContent = `${data.title}`;
//     const text2 = document.createElement('p');
//     text2.textContent = ` ${data.author}`;
//     const removebtn = document.createElement('button');
//     removebtn.textContent = 'Remove';
//     removebtn.addEventListener('click', removeBook.bind(index));
//     newBook.appendChild(text2);
//     newBook.appendChild(text);
//     newBook.appendChild(removebtn);
//     addBook.appendChild(newBook);
//   });
// }

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (title.value && author.value) {
//     const bookObject = {
//       title: title.value,
//       author: author.value,
//     };
//     books.push(bookObject);
//     saveBooks(books);
//     displayBook();
//     title.value = '';
//     author.value = '';
//   }
// });

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class page {
  static awesomeBooks() {
    const storedBooks = [
      {
        title: 'firstbook',
        author: 'ifeanyi'
      },
      {
        title: 'secondbook',
        author: 'oti'
      }
    ]
    const pagebooks = storedBooks;
    pagebooks.forEach((books) => page.bookList(books))
  }
  static bookList(books) {
    const list = document.getElementById('book-collection');
    const create = document.createElement('div');
    create.innerHTML = `
    <tr>
    <th>${books.title}</th>
    <th>${books.author}</th>
    </tr>
      <button class="remove-btn">Remove</button>
    `;
    list.appendChild(create);
  }

  static deleteBook(target) {
    if(target.classList.contains("remove-btn")){
      target.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
  }
}

document.addEventListener('DOMContentLoaded',page.awesomeBooks);

document.querySelector('#add-button').addEventListener('click',(e) => {
  e.preventDefault();

  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  
  const books = new Book(title,author);
  page.bookList(books)

  // to clear fields
  page.clearFields();

  // to remove a book
  document.querySelector("#book-collection").addEventListener('click',(e) => {
    page.deleteBook(e.target)
  })
})