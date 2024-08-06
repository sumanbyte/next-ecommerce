import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    tagTypes: ['Products'],
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/api/products',
            providesTags: ['Products'],
        }),
    }),
})

export const {useGetProductsQuery} = productsApi;
