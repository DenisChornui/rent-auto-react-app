// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { authReducer } from './auth/authSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// const rootReducer = combineReducers({
//   auth: persistedAuthReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);


import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./cars/carSlice";
import { favoriteReducer } from "./favorite/favoriteSlice";

export const store = configureStore({
    reducer: {
        car: carReducer,
        favoriteImages: favoriteReducer,
    }
})