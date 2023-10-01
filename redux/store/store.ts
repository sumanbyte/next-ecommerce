import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../entities/navbar'

const store = configureStore({
    reducer: {
        navbar: navbarReducer
    }
})

export default store