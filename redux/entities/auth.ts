import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        error: ""
    },
    reducers: {
        startAuth(state){
            state.isLoading = true;
        },
        updateAuthStatus(state, action){
            state.isLoading = false;
            state.isAuthenticated = action.payload;
        }


    }
})

export const {startAuth, updateAuthStatus} = slice.actions;

export default slice.reducer;