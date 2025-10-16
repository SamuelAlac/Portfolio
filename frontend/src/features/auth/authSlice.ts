import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) =>{
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
        },
        loggedIn: (state, action) =>{
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        loginFailed: (state) =>{
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },
        logout: (state) =>{
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
        }
    }
})

export const { login, loggedIn, loginFailed, logout } =  authSlice.actions;
export default authSlice.reducer;