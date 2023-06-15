import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      status: 'Completed',
      progress: '8',
      currentChapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      status: 'Completed',
      progress: '8',
      currentChapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      status: 'Completed',
      progress: '8',
      currentChapter: 'Chapter 3: "A Lesson Learned"',
    },
  ],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      // For adding the book to the bookstore
      state.books.push(payload.book);
    },
    removeBook: (state, { payload }) => {
      // Remove the book from the bookstore
      state.books = state.books.filter((book) => book.itemId !== payload.itemId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
