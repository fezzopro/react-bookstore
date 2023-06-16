import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';
import Form from '../Form/Form';
import BookItem from './BookItem';
import { fetchBooks } from '../../redux/books/booksSlice';

const Book = ({ books }) => {
  const bookList = books.map((book) => (
    <BookItem book={book} key={Math.random() * 10000} />
  ));
  return bookList;
};
const Home = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      <ul className="books">
        { bookList.error !== '' ? <div className="error"><span>{bookList.error}</span></div> : null}
        { bookList.isLoading ? <div className="loading"><span /></div> : <Book books={bookList.books} />}
      </ul>
      <div className="horizontal-line" />
      <div>
        <h2 className="form-title">ADD NEW BOOK</h2>
      </div>
      <Form bookLength={bookList.books.length} />
    </div>
  );
};

export default Home;
