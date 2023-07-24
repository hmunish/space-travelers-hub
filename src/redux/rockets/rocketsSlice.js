import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const rocketsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { addBook, removeBook } = booksSlice.actions;

export default rocketsSlice.reducer;
