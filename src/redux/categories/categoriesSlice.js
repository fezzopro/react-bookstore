import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state) => {
      // For adding a new category to the bookstore categories
    },
    removeCategory: (state) => {
      // Remove categpry from the bookstore categories
    },
    editCategory: (state, action) => {
      // Edit category from the bookstore categories
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory, removeCategory, editCategory } = categorySlice.actions;

export default categorySlice.reducer;
