import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isLoading: true,
        error: ""
    },
    reducers: {
        updateAuthStatus(state, action){
            state.isLoading = false;
            state.isAuthenticated = action.payload;
        }


    }
})

export const { updateAuthStatus} = slice.actions;

export default slice.reducer;