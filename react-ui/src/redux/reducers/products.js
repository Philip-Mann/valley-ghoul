import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
};

export const productsSlice = createSlice({
    name: 'productsApi',
    initialState,
    reducers: {
        getProductsData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { getProductsData } = productsSlice.actions;

export const productsData = (state) => state.productsApi;

export default productsSlice.reducer;