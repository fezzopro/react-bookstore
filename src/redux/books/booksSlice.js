import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state) => {
      // For adding the book to the bookstore
    },
    removeBook: (state) => {
      // Remove the book from the bookstore
    },
    editBook: (state, action) => {
      // Edit the book from the book store
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBook, removeBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
