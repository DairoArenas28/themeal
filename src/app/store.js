
import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categorySlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice
    }       
,
})