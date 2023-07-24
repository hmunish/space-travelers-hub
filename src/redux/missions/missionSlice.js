import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const missionSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { addBook, removeBook } = booksSlice.actions;

export default missionSlice.reducer;
