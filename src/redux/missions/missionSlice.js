import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  isLoading: false,
  isError: false,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (thunkAPI) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const missionSlice = createSlice({
  name: 'missionsList',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missions = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,

      }));
    });
  },
});

export default missionSlice.reducer;
