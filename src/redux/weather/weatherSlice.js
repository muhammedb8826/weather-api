import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherCollection: [],
  isLoading: true,
  error: null,
};

const wetherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
});

export default wetherSlice.reducer;
