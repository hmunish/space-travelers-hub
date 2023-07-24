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
  reservedRockets: [],
  reservedRocketsName: [],
  errors: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addReservation: (state, param) => {
      const { id } = param.payload;
      state.reservedRockets.push(id);
      const newRocketsData = state.value.map((e) => {
        if (e.id !== id) return e;

        state.reservedRocketsName.push(e.name);
        return { ...e, reserved: true };
      });
      state.value = newRocketsData;
      localStorage.setItem('rockets', JSON.stringify(state.reservedRockets)); // Updating local storage
    },
    deleteReservation: (state, param) => {
      const { id, name } = param.payload;
      const newRocketsData = state.value.map((e) => {
        if (e.id !== id) return e;
        return { ...e, reserved: false };
      });
      state.value = newRocketsData;
      state.reservedRockets = state.reservedRockets.filter((e) => id !== e);
      state.reservedRocketsName = state.reservedRocketsName.filter(
        (e) => name !== e,
      );

      localStorage.setItem('rockets', JSON.stringify(state.reservedRockets));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const storage = localStorage.getItem('rockets');
      if (storage) state.reservedRockets = JSON.parse(storage);
      const reservedRocketsNameLocal = [];
      state.loading = false;
      state.value = action.payload.map((el) => {
        const {
          id, name, flickr_images: flickrImages, description,
        } = el;
        const obj = {
          id,
          name,
          flickrImages,
          description,
        };
        for (let i = 0; i < state.reservedRockets.length; i += 1) {
          if (state.reservedRockets[i] === id) {
            obj.reserved = true;
            reservedRocketsNameLocal.push(name);
            break;
          }
        }
        state.reservedRocketsName = reservedRocketsNameLocal;
        return obj;
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
export const { addReservation, deleteReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
