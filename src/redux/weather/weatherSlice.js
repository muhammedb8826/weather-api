import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  baseURL, forecast, search, future, astronomy, timezone, sports,
} from '../API';

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
      .addCase(getCurrent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
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
