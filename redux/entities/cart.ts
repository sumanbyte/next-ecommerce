import { ProductObjectInterface } from "@/components/Homepage/Products/Products";
import { createSlice } from "@reduxjs/toolkit";

interface CartType {
  payload: {
    product: ProductObjectInterface;
  };
}

const slice = createSlice({
  initialState: {
    items: [],
  },
  name: "cart",
  reducers: {
    // initial set cart when page is loaded.
    setCart: (state, action) => {
      state.items = action.payload.items;
    },
    // adding a product to the cart state.
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload.item];
    },
    removeFromCart: (state, action) => {
      let { index } = action.payload;
      state.items.slice(index, 1);
    },
    changeQuantity: (state, action) => {
      if (action.payload.type == "ADD_QUANTITY") {
        let id = action.payload.productId;
        let updatedProducts = state.items.map((item) => {
          if (item.id == id) {
            let currentQuantity = item.quantity;
            return { ...item, quantity: currentQuantity + 1 };
          }
          return item;
        });
        state.items = updatedProducts;
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else if (action.payload.type == "LESS_QUANTITY") {
        let id = action.payload.productId;
        let updatedProducts = state.items.map((item) => {
          if (item.id == id) {
            let currentQuantity = item.quantity;
            if (currentQuantity <= 1) {
              currentQuantity = 1;
            } else {
              currentQuantity--;
            }
            return { ...item, quantity: currentQuantity };
          }
          return item;
        });

        state.items = updatedProducts;
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        return state;
      }
    },
  },
});

export const { addToCart, removeFromCart, setCart, changeQuantity } =
  slice.actions;
export default slice.reducer;
