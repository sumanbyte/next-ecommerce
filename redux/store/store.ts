import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartsApi } from "../apis/cartApiSlice";
import { productsApi } from "../apis/productsApiSlice";
import navbarReducer from "../entities/navbar";
import cartReducer from "../entities/cart";
import authReducer from "../entities/auth";

const combinedReducer = combineReducers({
  navbar: navbarReducer,
  cart: cartReducer,
  auth: authReducer,
  [cartsApi.reducerPath]: cartsApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const rootReducer = (state:any, action:any) => {
    if (action.type === 'auth/logout') {
        state = undefined;
    }
    return combinedReducer(state, action);
};


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), productsApi.middleware, cartsApi.middleware]
});



export type AppDispatch = typeof store.dispatch;
export default store;
