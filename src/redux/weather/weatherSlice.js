import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../API';

const initialState = {
  Location: [],
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

export const searchByCountryName = createAsyncThunk('search/searchByCountryName', async (name) => {
  try {
    const resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=593c557b7df54b688db22828231904&q=${name}&aqi=no`);
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
        Location: payload,
        isLoading: false,
      }))
      .addCase(getWeather.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(searchByCountryName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchByCountryName.fulfilled, (state, { payload }) => ({
        ...state,
        Location: payload,
        isLoading: false,
      }))
      .addCase(searchByCountryName.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default wetherSlice.reducer;
