import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"}),
  tagTypes: ["Carts"],
  reducerPath: "cartsApi",
  endpoints: (builder)=> ({
    
    getCarts: builder.query({
        query: ()=> "/api/user/carts",
        providesTags: ["Carts"],
        transformResponse: ((response: {carts: any}) => response.carts)
    }),

    addToCart: builder.mutation({
      query: (data) => ({
        url: "/api/user/cart",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Carts"]
    })
    


  })
});


export const {
  useGetCartsQuery
} = cartsApi;