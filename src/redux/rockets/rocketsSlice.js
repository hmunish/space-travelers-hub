import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (thunkAPI) => {
    try {
      const res = await fetch('https://api.spacexdata.com/v4/rockets');
      if (!res.ok) throw new Error('Unable to get data for the rockets');
      const data = res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const initialState = {
  loading: false,
  value: [],
  errors: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload.map((el) => {
        const {
          id, name, flickr_images: flickrImages, description,
        } = el;
        return {
          id,
          name,
          flickrImages,
          description,
        };
      });
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.error.message;
    });
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { addBook, removeBook } = booksSlice.actions;

export default rocketsSlice.reducer;
