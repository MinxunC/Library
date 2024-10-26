import defaultBooks from './books.js';
import { handleCloseBookForm, handleOpenBookForm, createBookContainers } from './bookForm.js';


const books = JSON.parse(localStorage.getItem('localBooks')) ?? defaultBooks;
createBookContainers(books);

// Add new book form in the home page
const addBookBtn = document.querySelector('#add-book-button');
addBookBtn.addEventListener('click', handleOpenBookForm);

const submitBtb = document.querySelector('#submit-btn');
submitBtb.addEventListener('click', ()=>handleCloseBookForm(books));

// const pageAnswer = document.querySelector('#page-num-answer');
// pageAnswer.addEventListener('keydown', (e)=>{
//     if (e.key === 'Enter'){
//         handleCloseBookForm(books)
//     }
// })

