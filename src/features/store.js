import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./Movies/movieSlice";
import productReducer from "./Products/ProductSlice";

export const store = configureStore({
    reducer: {
        Movies: MoviesReducer,
        products: productReducer,
    },

});