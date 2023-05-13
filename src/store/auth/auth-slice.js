import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

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
    [authOperations.register.fulfilled](state, action) {
      // state.user = action.payload.user;
      // state.token = action.payload;
      // state.isLoggedIn = true;
    },
    // [authOperations.logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload;
    //   state.isLoggedIn = true;
    // },
    // [authOperations.register.fulfilled](state,action){

    // }
  },
});

export const authReducer = authSlice.reducer;
