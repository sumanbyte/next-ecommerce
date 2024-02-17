import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../store/store";

const initialState = {
  productsArray: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  initialState: initialState,
  reducers: {
    setProductsStart: (state, action) => {
      state.loading = true;
    },
    setProductsSuccess: (state, action) => {
      state.loading = false;
      state.productsArray = action.payload;
    },
    setProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  name: "product",
});

export const { setProductsStart, setProductsSuccess, setProductsFailure } =
  slice.actions;

export const setProducts = createAsyncThunk(
  "product/setProducts",
  async (_, { dispatch }) => {
    try {
      dispatch(setProductsStart(initialState));
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setProductsSuccess(data));
    } catch (e: any) {
      const error: string = e.message;
      setProductsFailure(error);
    }
  }
);

export type AppDispatch = typeof store.dispatch;

export default slice.reducer;
