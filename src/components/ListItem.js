import { useDispatch } from 'react-redux';
import { deleteBook, selectBook, selectBookFotEdit } from "../store/actions/book"
const ListItem = ({ one }) => {
    let dispatch = useDispatch();
    return (<div>
        <h2>{one.name}</h2>
        <input type="button" onClick={() => { dispatch(deleteBook(one.id)) }} value="מחק" />
        <input type="button" onClick={() => { dispatch(selectBookFotEdit(one)) }} value="עריכה" />
        <input type="button" onClick={() => { dispatch(selectBook(one)) }} value="הצגת פרטים" />
    </div>);
}

export default ListItem;
