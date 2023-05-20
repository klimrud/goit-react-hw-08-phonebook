import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Post @ /users/signup
// body:{name,email,password}
// если успешно => добавляем tocen в НТТРзаголовок

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);

    return response.data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
});

// Post @ /users/login
// body:{email,password}
// если успешно => добавляем tocen в НТТРзаголовок

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    return response.data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
});

// Post @ /users/logOut
//headers: Authorization: Bearer token
// если успешно login=> удаляем tocen в НТТРзаголовок

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');

    token.unset();
  } catch (error) {
    toast.error(`${error.message}`);
  }
});

// Get@ / user/current

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {}
  }
);
