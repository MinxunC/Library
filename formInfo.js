import setBookId from './setBookId.js';
import {maxCharacterAllowed, showErrorMessage, hideErrorMessage} from './errorMessage.js';


function getFormInfo (){
    /*
    Get User enter book name, author name, page number
    If, author or/and page number is empty, the answer will be set as Unknown.
    */
    const bookNameEle = document.querySelector('#book-name-answer');
    const authorNameEle = document.querySelector('#author-name-answer');
    const pageNumEle = document.querySelector('#page-num-answer');
    let bookName = bookNameEle.value;
    let authorName = authorNameEle.value;
    let pageNum = pageNumEle.value;

    const bookId = setBookId(bookName); 
    authorName = authorName ?  authorName : 'Unknown';
    pageNum = pageNum ?  pageNum : 'Unknown';
    
    const formInfo = { id: bookId, book: bookName, author: authorName, page: pageNum, readingStatus: "Unread" };
    return formInfo;
}

function checkFormInfo (info, allBooks){
    /* Check Form Content:
    page number > 1
    new book name should not in the current library
    if author name or/and page number filled, book name must be fulfilled
    
    If Pass the check, return form info. Otherwise, return false
    */
    const pageWarnMessage = document.querySelector('#page-warning-message');
    const duplicateBookMessage = document.querySelector('#duplicated-book-message');
    const emptyBookNameMessage = document.querySelector('#empty-book-name-warning-message');
    const bookLengthMessage = document.querySelector('#max-book-length-message');
    const authorLengthMessage = document.querySelector('#max-author-length-message');
    const isBookLengthAllowed = maxCharacterAllowed(info.book, 40, bookLengthMessage); 
    const isAuthorLengthAllowed = maxCharacterAllowed(info.author, 30, authorLengthMessage);
    const index = allBooks.findIndex(book => book.id === info.id);

    if (!info.book && info.author == 'Unknown' && info.page == 'Unknown'){
        return {id: info.id, bookName: info.bookName, author: info.author, page: info.page, readingStatus: "Unread"};
    }

    ((info.page > 1 || info.author !== "Unknown") && !info.book) ? showErrorMessage(emptyBookNameMessage) : hideErrorMessage(emptyBookNameMessage)
    index > -1 ? showErrorMessage(duplicateBookMessage): hideErrorMessage (duplicateBookMessage); 
    info.page < 1 ? showErrorMessage(pageWarnMessage) :  hideErrorMessage(pageWarnMessage); 

    if (index>-1 || info.page < 1 || !isBookLengthAllowed || !isAuthorLengthAllowed || ((info.page || info.author) && !info.book)){ // cannot submit if duplicated book name or page number < 1, or the length of book name > 40 characters, or the length of author name > 30 characteras
        return false;
    } else {
        return { id: info.id, book: info.book, author: info.author, page: info.page, readingStatus: "Unread" };
    }
}

export {getFormInfo, checkFormInfo}
