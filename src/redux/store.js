import { configureStore } from '@reduxjs/toolkit';
import weatherRecure from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherRecure,
  },
});

export default store;
