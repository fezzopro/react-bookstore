import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    itemId: Math.floor(Math.random() * 10000),
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
      dispatch(addBook({ book: { bookId: Math.floor(Math.random() * 10000), ...book } }));
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
      <select className="input category-input" name="category" onChange={handleChange}>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className="primary-button-big" type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
