import { useSelector } from 'react-redux';
import './Home.css';
import { books } from '../../redux/store';
import Form from '../Form/Form';
import BookItem from './BookItem';

const Book = ({ books }) => {
  const bookList = books.map((book) => (
    <BookItem book={book} key={Math.random() * 10000} />
  ));
  return bookList;
};
const Home = () => {
  const { ...bookList } = useSelector(books);

  return (
    <div>
      <ul className="books">
        <Book books={bookList.books} />
      </ul>
      <div className="horizontal-line" />
      <div>
        <h2 className="form-title">ADD NEW BOOK</h2>
      </div>
      <Form onChange />
    </div>
  );
};

export default Home;
