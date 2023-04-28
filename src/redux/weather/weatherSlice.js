import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../API';

const initialState = {
  Current: [],
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
