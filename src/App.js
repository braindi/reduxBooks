import './App.css';
import { useSelector } from 'react-redux';
import List from './components/List';
import BookDetails from './components/BookDetails';
import Edit from './components/Edit';
import NewBook from './components/NewBook';

function App() {
  let selected = useSelector(st => st.selectedBook);
  let seletedForEdit = useSelector(st => st.selectedBookForEdit);
  let addB = useSelector(st => st.adding)
  return (<>
    <List />
    {selected && <BookDetails />}
    {seletedForEdit && <Edit />}
    {addB && <NewBook />}
  </>
  );
}

export default App;
