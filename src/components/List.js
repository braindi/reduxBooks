import { useSelector } from "react-redux";
import { openform } from "../store/actions/book";
import ListItem from "./ListItem";
import { useDispatch } from 'react-redux';

const List = () => {
    let dispatch = useDispatch();
    let arr = useSelector(state => state.arr);
    return (<>רשימת הספרים
        <ul>
            {arr.map(item => <li key={item.id}>
                <ListItem one={item} />
            </li>)}
        </ul>        
        <input type="button" onClick={() => { dispatch(openform()) }} value="הוסף ספר" />
    </>);
}

export default List;