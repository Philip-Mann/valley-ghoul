import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsTableFromDataBase } from './services/productsFetch';
import { cartSlice } from './reducers/addToCart';

export const store = configureStore({
    reducer: {
        [productsTableFromDataBase.reducerPath]: productsTableFromDataBase.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsTableFromDataBase.middleware)
    // update above ^^^
});

setupListeners(store.dispatch);