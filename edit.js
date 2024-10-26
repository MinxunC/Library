import setBookId from './setBookId.js';

function handleEdit(bookContainer){
    const allContent = bookContainer.querySelectorAll('span')
    for (const i of allContent){
        i.setAttribute('contentEditable', true);
    }
    bookContainer.querySelector('.save-btn').style.display = 'inline';
}

function handleUpdateContent (bookContainer, bookId, allBooks){
    const allContent = bookContainer.querySelectorAll('span');
    let newName = bookContainer.querySelector('#bookName').innerHTML;
    const newAuthor = bookContainer.querySelector('#authorName').innerHTML;
    const newPage = bookContainer.querySelector('#pageNum').innerHTML;
    
    for (const i of allContent){
        i.removeAttribute('contentEditable');
    };
    bookContainer.querySelector('.save-btn').style.display = 'none';
    
    //update into books object
    const index = allBooks.findIndex(book => book.id === bookId);


    allBooks[index] = {id: setBookId(newName), book: newName, author: newAuthor, page: newPage};
    localStorage.setItem('localBooks', JSON.stringify(allBooks)); 
    // console.log(allBooks);
}



export {handleEdit, handleUpdateContent}