import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, APP_TOKEN } from '../globals/globals';

const initialState = {
  isLoading: true,
  books: [],
  error: '',
  message: '',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => (
  axios
    .get(`${API_URL}${APP_TOKEN}/books`)
    .then((response) => response.data)
));

export const createBook = createAsyncThunk('books/createBook', (book) => (
  axios
    .post(`${API_URL}${APP_TOKEN}/books`, book)
    .then(() => book)
));
export const deleteBook = createAsyncThunk('books/deleteBook', (id) => (
  axios
    .delete(`${API_URL}${APP_TOKEN}/books/${id}`)
    .then(() => id)
));

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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const ids = Object.keys(action.payload);
      const responses = Object.values(action.payload).map((book) => book[0]);
      const tmpBooks = [];
      for (let index = 0; index < responses.length; index++) { // eslint-disable-line no-plusplus
        tmpBooks.push({
          itemId: ids[index],
          status: 'Not Started',
          currentChapter: 'N/A',
          progress: 0,
          ...responses[index],
        });
      }
      state.isLoading = false;
      state.books = tmpBooks;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });

    // Create a book
    builder.addCase(createBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createBook.fulfilled, (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
      isLoading: false,
      message: action.payload,
    }));
    builder.addCase(createBook.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });

    // Delete a book
    builder.addCase(deleteBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.itemId !== action.payload);
      state.isLoading = false;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
