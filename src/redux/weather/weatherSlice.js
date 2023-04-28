import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const APIkey = '593c557b7df54b688db22828231904';
const baseURL = 'https://api.weatherapi.com/v1/current.json?key=593c557b7df54b688db22828231904&q=Ethiopia&aqi=no';
const forecast = 'https://api.weatherapi.com/v1/forecast.json?key=593c557b7df54b688db22828231904&q=Ethiopia&days=1&aqi=no&alerts=no';
const search = 'https://api.weatherapi.com/v1/search.json?key=593c557b7df54b688db22828231904&q=Ethiopia';
const future = 'https://api.weatherapi.com/v1/future.json?key=593c557b7df54b688db22828231904&q=Ethiopia&dt=2023-05-26';
const astronomy = 'https://api.weatherapi.com/v1/astronomy.json?key=593c557b7df54b688db22828231904&q=Ethiopia&dt=2023-04-26';
const timezone = 'https://api.weatherapi.com/v1/timezone.json?key=593c557b7df54b688db22828231904&q=Ethiopia';
const sports = 'https://api.weatherapi.com/v1/sports.json?key=593c557b7df54b688db22828231904&q=Ethiopia';

const initialState = {
  Current: [],
  Forecast: [],
  Search: [],
  Future: [],
  Astronomy: [],
  TimeZone: [],
  Sports: [],
  History: [],
  isLoading: true,
  error: null,
};

const url = baseURL;

export const getCurrent = createAsyncThunk('current/getCurrent', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getForecast = createAsyncThunk('forecast/getForecast', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(forecast);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getSearch = createAsyncThunk('search/getSearch', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(search);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getFuture = createAsyncThunk('future/getFuture', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(future);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getAstronomy = createAsyncThunk('astronomy/getAstronomy', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(astronomy);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getTimeZone = createAsyncThunk('timezone/getTimeZone', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(timezone);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const getSports = createAsyncThunk('sports/getSports', async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(sports);

    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error.message);
  }
});

export const searchByCountryName = createAsyncThunk('search/searchByCountryName', async (name, { rejectWithValue }) => {
  try {
    const resp = await axios.get(`https://api.weatherapi.com/v1/current.json?key=593c557b7df54b688db22828231904&q=${name}&aqi=no`);
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
      .addCase(getCurrent.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(getCurrent.fulfilled, (state, { payload }) => ({
        ...state,
        Current: payload,
        isLoading: false,
      }))
      .addCase(getCurrent.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getForecast.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getForecast.fulfilled, (state, { payload }) => ({
        ...state,
        Forecast: payload.forecast,
        isLoading: false,
      }))
      .addCase(getForecast.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSearch.fulfilled, (state, { payload }) => ({
        ...state,
        Search: payload,
        isLoading: false,
      }))
      .addCase(getSearch.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getFuture.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFuture.fulfilled, (state, { payload }) => ({
        ...state,
        Future: payload.forecast,
        isLoading: false,
      }))
      .addCase(getFuture.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getAstronomy.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAstronomy.fulfilled, (state, { payload }) => ({
        ...state,
        Astronomy: payload.astronomy,
        isLoading: false,
      }))
      .addCase(getAstronomy.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getTimeZone.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTimeZone.fulfilled, (state, { payload }) => ({
        ...state,
        TimeZone: payload,
        isLoading: false,
      }))
      .addCase(getTimeZone.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(getSports.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSports.fulfilled, (state, { payload }) => ({
        ...state,
        Sports: payload,
        isLoading: false,
      }))
      .addCase(getSports.rejected, (state, { payload }) => ({
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
        Current: payload,
        isLoading: false,
      }))
      .addCase(searchByCountryName.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export default wetherSlice.reducer;
