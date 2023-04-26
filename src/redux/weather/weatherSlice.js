import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL, countries } from '../API';

const initialState = {
  Location: [],
  Country: [],
  isLoading: true,
  error: null,
};

const url = baseURL;

export const getWeather = createAsyncThunk('weather/getWeather', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(url);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getCountry = createAsyncThunk('country/getCountry', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(countries);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const searchByCountryName = createAsyncThunk('search/searchByCountryName', async (name, { rejectWithValue }) => {
  try {
    const resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=593c557b7df54b688db22828231904&q=${name}&aqi=no`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
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
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, { payload }) => ({
        ...state,
        Location: payload,
        isLoading: false,
      }))
      .addCase(getWeather.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(searchByCountryName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchByCountryName.fulfilled, (state, { payload }) => ({
        ...state,
        Location: payload,
        isLoading: false,
      }))
      .addCase(searchByCountryName.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getCountry.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCountry.fulfilled, (state, { payload }) => ({
        ...state,
        Country: payload,
        isLoading: false,
      }));
  },
});

export default wetherSlice.reducer;
