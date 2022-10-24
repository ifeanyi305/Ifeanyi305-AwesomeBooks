// Create array of books
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBook = document.querySelector('#book-collection');
const btn = document.querySelector('#add-button');

if (!localStorage.getItem('bookInfo')) {
    localStorage.setItem('bookInfo', JSON.stringify([]));
}

let books;

function userInterface() {
    addBook.innerHTML = '';
    books.forEach((data, index) => {
        const newBook =document.createElement('div');
        newBook.classList.add('new-book');
        const text =document.createElement('p');
        text.textContent = `${data.title} By ${data.author}`;
        const removebtn = document.createElement('button');
        removebtn.textContent = 'Remove';
        removebtn.addEventListener('click', removebtn.bind(index));
        newBook.appendChild(text);
        newBook.appendChild(removebtn);
        addBook.appendChild(newBook);
    });
}

function displayBook() {
    books = JSON.parse(localStorage.getItem('bookInfo'));
    userInterface ();
}
displayBook ();

function saveBooks(book) {
    localStorage.setItem('bookInfo', JSON.stringify(book));
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value && author.value) {
        const bookObject = {
            title: title.value,
            author: author.value,
        }
        books.push(bookObject);
        saveBooks(books);
        displayBook();
        title.value = '';
        author.value = '';
    } 
})