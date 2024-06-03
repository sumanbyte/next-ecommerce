import { configureStore } from '@reduxjs/toolkit';
import { cartsApi } from '../apis/cartApiSlice';
import { productsApi } from '../apis/productsApiSlice';
import navbarReducer from '../entities/navbar';
import cartReducer from '../entities/cart';
import authReducer from '../entities/auth';

const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cart: cartReducer,
        auth: authReducer,
        [cartsApi.reducerPath]: cartsApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), cartsApi.middleware, productsApi.middleware]
});

export type AppDispatch = typeof store.dispatch;
export default store