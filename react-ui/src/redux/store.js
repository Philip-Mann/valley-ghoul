import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        // [casesDataBase.reducerPath]: casesDataBase.reducer,
        // update above ^^^
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(casesDataBase.middleware)
    // update above ^^^
});

setupListeners(store.dispatch);