const myInitialState = {
    arr: [
        { id: 1, name: "דודי ואודי", price: 45, image: "", writer: "יעקב פלדמן" },
        { id: 2, name: "קומיקסבא", price: 10, image: "", writer: "יצחק לב" },
        { id: 3, name: "ילדים מספרים על עצמם", price: 60, image: "", writer: " חיים ולדר" },
    ],
    selectedBook: null,
    selectedBookForEdit: null,
    adding: false
}

export const bookReducer = (state = myInitialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                arr: [...state.arr, action.payload],
                adding:null
            }
        case "SELECT_BOOK":
            return {
                selectedBook: action.payload,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr,
                adding: state.adding
            }
        case "SELECT_BOOK_FOR_EDIT":
            return {
                arr: state.arr,
                selectedBook: state.selectedBook,
                selectedBookForEdit: action.payload,
                adding: state.adding
            }
        case "DELETE_BOOK":
            return {
                selectedBook: state.selectedBook?.id != action.payload ? state.selectedBook : null,
                selectedBookForEdit: state.selectedBookForEdit?.id != action.payload ? state.selectedBookForEdit : null,
                arr: state.arr.filter(item => item.id != action.payload),
                adding: state.adding

            }
        case "SAVE_EDITED_BOOK":
            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })

            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: null,
                arr: copy,
                adding: state.adding
            }

        case "OPEN_FORM":
            return {
                ...state,
                adding: true
            }
        default: return state;
    }
}