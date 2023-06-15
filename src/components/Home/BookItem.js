import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const {
    itemId,
    category,
    title,
    author,
    status,
    currentChapter,
    progress,
  } = book;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook({ itemId }));
  };
  return (
    <li key={Math.random() * 10000}>
      <div className="book">
        <div className="book-content">
          <div className="book-info-section">
            <h2 className="book-category">{category}</h2>
            <h3 className="book-title">{title}</h3>
            <h6 className="book-author">{author}</h6>
            <div className="book-actions">
              <button className="book-action-button" type="button">Comments</button>
              <div className="vertical-line" />
              <button className="book-action-button" type="button" onClick={handleDelete}>Remove</button>
              <div className="vertical-line" />
              <button className="book-action-button" type="button">Edit</button>
            </div>
          </div>
          <div className="progress-section">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">
                {progress}
                %
              </p>
              <p className="completed">{status}</p>
            </div>
            <div className="vertical-line progress-line" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">{currentChapter}</p>
              </div>
              <div>
                <button className="primary-button" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired, // eslint-disable-line
};

export default BookItem;
