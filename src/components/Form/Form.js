import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../redux/books/booksSlice';
import './Form.css';

const Form = ({ bookLength }) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    itemId: bookLength + 1,
    title: '',
    author: '',
    category: '',
    status: 'Not Started',
    progress: 0,
    currentChapter: 'N/A',
  });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      dispatch(createBook({ item_id: bookLength + 1, ...book }));
      setBook({ title: '', author: '', category: '' });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="add-form" onSubmit={addNewBook}>
      <input type="text" name="title" className="input title-input" placeholder="Book title" required value={book.title} onChange={handleChange} />
      <input type="text" name="author" className="input title-input" placeholder="Book author" required value={book.author} onChange={handleChange} />
      <select className="input category-input" name="category" onChange={handleChange} required>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className="primary-button-big" type="submit">ADD BOOK</button>
    </form>
  );
};

Form.propTypes = {
  bookLength: PropTypes.number, // eslint-disable-line
};

export default Form;
