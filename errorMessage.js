function maxCharacterAllowed (string, num, errorEle) {
    if (string.length > num){
        showErrorMessage(errorEle);
        return false;
    } else {
        hideErrorMessage(errorEle);
        return true;
    }
};

function showErrorMessage(errorEle){
    errorEle.style.display = 'flex';
};

function hideErrorMessage(errorEle){
    errorEle.style.display = 'none';
};


export {maxCharacterAllowed, showErrorMessage, hideErrorMessage}