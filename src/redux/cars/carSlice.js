import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled](state, action) {
      state.cars = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const carReducer = carSlice.reducer;
