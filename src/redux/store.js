
import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./cars/carSlice";
import { favoriteReducer } from "./favorite/favoriteSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        car: carReducer,
        favoriteImages: favoriteReducer,
        filter: filterReducer,
    }
})
