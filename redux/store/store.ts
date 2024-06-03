import { configureStore } from '@reduxjs/toolkit';
import { api } from '../apis/cartApiSlice';
import navbarReducer from '../entities/navbar';
import productReducer from '../entities/products';
import cartReducer from '../entities/cart';
import authReducer from '../entities/auth';

const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});



export type AppDispatch = typeof store.dispatch;
export default store