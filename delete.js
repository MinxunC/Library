function handleDeleteInfo (bookName, allBooks) {
    const index = allBooks.findIndex(book => book.book === bookName);
    if (index > -1) {
        allBooks.splice(index, 1);
        localStorage.setItem('localBooks', JSON.stringify(allBooks)); 
    }   
}

export {handleDeleteInfo}