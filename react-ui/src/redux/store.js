import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsTableFromDataBase } from './services/productsFetch';

export const store = configureStore({
    reducer: {
        [productsTableFromDataBase.reducerPath]: productsTableFromDataBase.reducer,
        // update above ^^^
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsTableFromDataBase.middleware)
    // update above ^^^
});

setupListeners(store.dispatch);