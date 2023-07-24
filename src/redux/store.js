import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missionsList: missionReducer,
    rocketsList: rocketsReducer,
  },
});

export default store;
