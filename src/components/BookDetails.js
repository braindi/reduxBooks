import { useSelector } from 'react-redux';
const BookDetails = () => {
    let selected = useSelector(st => st.selectedBook);
    return (<div>
        <h2>{selected.name}</h2>
        <h3>{selected.price}</h3>
        <image>{selected.image}</image>
        <h4>{selected.writer}</h4>
    </div>);
}

export default BookDetails;