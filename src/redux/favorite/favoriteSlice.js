import { createSlice } from '@reduxjs/toolkit';

const favoriteImagesSlice = createSlice({
  name: 'favoriteImages',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(image => image.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteImagesSlice.actions;
export const favoriteReducer = favoriteImagesSlice.reducer;
