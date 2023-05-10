import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Post @ /users/signup
// body:{name,email,password}
// если успешно => добавляем tocen в НТТРзаголовок

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    //tocen.set{data.tocen}
    return data;
  } catch (error) {
    console.log('error', error);
  }
});

// Post @ /users/login
// body:{email,password}
// если успешно => добавляем tocen в НТТРзаголовок

export  const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    //tocen.set{data.tocen}
    return data;
  } catch (error) {
    console.log('error', error);
  }
});

// const authOperations = {
//   register,
//   // logOut,
//   logIn,
//   // fetchCurrentUser,
// };
// export default authOperations;
