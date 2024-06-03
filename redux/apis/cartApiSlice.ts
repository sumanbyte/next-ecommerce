import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"}),
  tagTypes: ["Carts"],
  endpoints: (builder)=> ({
    
    getCarts: builder.query({
        query: ()=> "/api/user/carts",
        providesTags: ["Carts"],
        transformResponse: ((response: {carts: any}) => response.carts)
    }),

    


  })
});


export const {
  useGetCartsQuery
} = api;