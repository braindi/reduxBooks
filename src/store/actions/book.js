
export const selectBook = (book) => {
    return {
        type: "SELECT_BOOK",
        payload: book
    }
}

export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}

export const deleteBook = (bookId) => {
    return {
        type: "DELETE_BOOK",
        payload: bookId
    }
}

export const selectBookFotEdit = (book) => {
    return {
        type: "SELECT_BOOK_FOR_EDIT",
        payload: book
    }
}

export const saveEditedBook = (book) => {
    return {
        type: "SAVE_EDITED_BOOK",
        payload: book
    }
}

export const openform=()=>{
    return{
        type:"OPEN_FORM"
    }
}