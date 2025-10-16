import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) =>{
            state.loading = false;
        },
        loggedIn: (state, action) =>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
        },
        loginFailed: (state) =>{
            state.loading = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
        logout: (state) =>{
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        }
    }
})

export const { login, loggedIn, loginFailed, logout } =  authSlice.actions;
export default authSlice.reducer;