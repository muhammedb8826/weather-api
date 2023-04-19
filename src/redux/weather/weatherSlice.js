import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../API';

const initialState = {
  weatherCollection: [],
  isLoading: true,
  error: null,
};

const url = baseURL;

export const getWeather = createAsyncThunk('weather/getWeather', async () => {
  try {
    const resp = await axios.get(url);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const wetherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, { payload }) => ({
        ...state,
        weatherCollection: payload,
        isLoading: false,
      }))
      .addCase(getWeather.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default wetherSlice.reducer;
