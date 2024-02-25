import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { carReducer } from './cars/carSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
import { filterReducer } from './filter/filterSlice';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    car: carReducer,
    favoriteImages: favoriteReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
