import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        setCategories: (state, action) => {
            state.list = action.payload
        },
        selectCategory: (state, action) => {
            state.selected = action.payload
        },
    }
})

export const { setCategories, selectCategory } = categorySlice.actions
export default categorySlice.reducer