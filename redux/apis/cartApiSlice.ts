// File path: src/redux/apis/cartApiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["showCarts"],
  reducerPath: "cartsApi",
  endpoints: (builder) => ({
    showCarts: builder.query({
      query: () => {
        return {
          url: "/api/user/carts",
          credentials: "include"
        }},
      providesTags: ["showCarts"],
      transformResponse: (response: { carts: any }) => response.carts,
    }),
    deleteFromCart: builder.mutation({
      query: (data) => ({
        url: "/api/user/cart",
        method: "DELETE",
        body: data
      }),
      invalidatesTags: ["showCarts"],
      async onQueryStarted(data, {dispatch, queryFulfilled}){
        const patchResult = dispatch(
          cartsApi.util.updateQueryData("showCarts", undefined, (carts:any)=> {
            const cartIndex = carts.findIndex((cart:any)=> cart._id == data.cartId);
            carts.splice(cartIndex, 1);
          })
        )

        try{
          await queryFulfilled;
        }catch{
          patchResult.undo();
        }
      }
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/api/user/cart",
        method: "POST",
        body: data,
        credentials: "include"
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartsApi.util.updateQueryData(
            "showCarts",
            undefined,
            (carts: any) => {
              
              carts.unshift(data);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["showCarts"],
    }),
    addToCarts: builder.mutation({
      query: (data) => ({
        url: "/api/user/carts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["showCarts"],

    }),
    updateCart: builder.mutation({
      query: (data: any) => ({
        url: `/api/user/cart/updatequantity/${data.productId}`,
        method: "PATCH",
        body: { quantity: data.quantity },
      }),
      invalidatesTags: ["showCarts"],
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        console.log(data);

        // Start optimistic update
        const patchResult = dispatch(
          cartsApi.util.updateQueryData(
            "showCarts",
            undefined,
            (carts: any) => {
              const cartIndex = carts.findIndex(
                (item: any) => item.productId._id === data.productId
              );
              console.log("Found cart item:", cartIndex);

              if (cartIndex > -1) {
                let currentQuantity = carts[cartIndex].quantity;
                if (data.quantity == "INCREASE_QUANTITY") {
                  carts[cartIndex] = {
                    ...carts[cartIndex],
                    quantity: currentQuantity + 1,
                  };
                } else if (data.quantity == "DECREASE_QUANTITY") {
                  carts[cartIndex] = {
                    ...carts[cartIndex],
                    quantity: currentQuantity - 1,
                  };
                }
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          // Rollback on failure
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useShowCartsQuery,
  useLazyShowCartsQuery,
  useAddToCartsMutation,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteFromCartMutation
} = cartsApi;
