import { createSlice } from '@reduxjs/toolkit';
import  { logIn, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  // isLoading: false,
  // error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    // [authOperations.register.fulfilled](state,action){

    // }
  },
});

export const authReducer = authSlice.reducer;
