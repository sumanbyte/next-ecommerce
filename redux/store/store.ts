import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../entities/navbar'
import productReducer from '../entities/products'
import cartReducer from '../entities/cart'

const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        products: productReducer,
        cart: cartReducer
    }
})

export default store