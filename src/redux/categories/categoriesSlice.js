import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: 'Category page Under Construction',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    status: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { status } = categorySlice.actions;

export default categorySlice.reducer;
