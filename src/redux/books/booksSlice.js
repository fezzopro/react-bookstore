import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      // For adding the book to the bookstore
      state.books.push(payload.book);
    },
    removeBook: (state, { payload }) => ({
      // Remove the book from the bookstore
      books: state.books.filter((book) => book.id !== payload.id),
    }),
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
