import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  productsArray: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  productsArray: [],
  loading: false,
  error: null,
};


const slice = createSlice({
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state)=> {
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action)=> {
      state.loading = false;
      state.productsArray = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action)=> {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    })
  },
  name: "product",
});



export const fetchProducts = createAsyncThunk(
  'product/fetchProducts', 
  async ()=> {
    try{
      const response = await fetch("http://localhost:3000/api/products");
      return response.json();
    }catch(err){
      console.log(err)
    }
  }
)


export default slice.reducer;
