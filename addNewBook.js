import { getFormInfo, checkFormInfo} from './formInfo.js';
import { handleDeleteInfo } from './delete.js';
import { handleEdit, handleUpdateContent } from './edit.js';

function bookContainer (id, book, author, page, allBooks){
    let bookContainer  = document.createElement('div');
    bookContainer.classList.add('book-container')
    bookContainer.innerHTML = 
      ` <h2><span id="bookName">${book}</span></h2>
        <button class='save-btn'>Save</button>
         <i class="edit-btn fa-solid fa-pen-to-square"></i>
         <i class="delete-btn fa-solid fa-trash"></i>
         <h3>Author: <span id="authorName">${author}</span></h3>
         <h3>Page: <span id="pageNum">${page}</span></h3>

        `;
            //  <label for="readingStatusOption" id="readingStatus">Readng Status</label>
            //  <select id="readingStatusOption">
            //      <option value="unread">Unread</option>
            //      <option value="reading">Reading</option>
            //      <option value="completed">Completed</option>


    // Delete
    bookContainer.querySelector('.delete-btn').addEventListener('click', ()=>{
        bookContainer.remove();
        handleDeleteInfo(book, allBooks)
    });
    // Edit
    bookContainer.querySelector('.edit-btn').addEventListener('click', ()=>handleEdit(bookContainer))
    bookContainer.querySelector('.save-btn').addEventListener('click', ()=>handleUpdateContent(bookContainer, id, allBooks))

    return bookContainer;
}


function addNewBook (allBooks) {

    const formInfo = getFormInfo();
    const formProcess = checkFormInfo(formInfo, allBooks);

    // when id is undefined, meaning no book info should be saved
    if (!formProcess.id){
        return true;
    } else {
        const newbookContainer = bookContainer(formProcess.id, formProcess.book, formProcess.author, formProcess.page, allBooks);
        const booksContainer = document.querySelector('.books-container');
        booksContainer.appendChild(newbookContainer);
        if (formProcess){
        allBooks.push(formProcess);  
        }
        localStorage.setItem('localBooks', JSON.stringify(allBooks)); 
        return formProcess;
    }    
}

export {bookContainer, addNewBook}
