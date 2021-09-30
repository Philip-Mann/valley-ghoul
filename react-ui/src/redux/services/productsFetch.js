import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsTableFromDataBase = createApi({
    reducerPath: 'productsTableFromDataBase',
    baseQuery: fetchBaseQuery({ baseUrl: '/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => {
                return '/api/products';
            }
        }),
    }),
});

export const { useGetProductsQuery } = productsTableFromDataBase;