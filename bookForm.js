import { handleDeleteInfo } from './delete.js';
import {bookContainer,addNewBook} from './addNewBook.js'
import { handleEdit, handleUpdateContent } from './edit.js';

const bookForm = document.querySelector('dialog');
   
function handleOpenBookForm (){
    bookForm.showModal();
}

function handleCloseBookForm (allBooks){
    const successfulAddBook = addNewBook(allBooks)
    // Clear Form
    const bookNameEle = document.querySelector('#book-name-answer');
    const authorNameEle = document.querySelector('#author-name-answer');
    const pageNumEle = document.querySelector('#page-num-answer');
    if (successfulAddBook) {
        bookNameEle.value = '';
        authorNameEle.value = '';
        pageNumEle.value = '';
        bookForm.close();
    }
    
}

function createBookContainers(allBooks) {
    allBooks?.forEach(book => {
        const newbookContainer = bookContainer(book.id, book.book, book.author, book.page, allBooks);
        newbookContainer.querySelector('.delete-btn').addEventListener('click', () => {
            newbookContainer.remove();
            handleDeleteInfo(book.book, allBooks)
        });
        newbookContainer.querySelector('.edit-btn').addEventListener('click', ()=>handleEdit(newbookContainer))
        newbookContainer.querySelector('.save-btn').addEventListener('click', ()=>handleUpdateContent(newbookContainer,book.id, allBooks))

        const booksContainer = document.querySelector('.books-container');
        booksContainer.appendChild(newbookContainer);
    });
}


export {createBookContainers, handleOpenBookForm, handleCloseBookForm};


