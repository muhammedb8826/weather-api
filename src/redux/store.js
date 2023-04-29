import { configureStore } from '@reduxjs/toolkit';
import weatherRedurer from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherRedurer,
  },
});

export default store;
