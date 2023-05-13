import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization= `Bearer ${token}`;
//   },
//   unset(){
//     axios.defaults.headers.common.Authorization= '';
//   },
// };


// Post @ /users/signup
// body:{name,email,password}
// если успешно => добавляем tocen в НТТРзаголовок

 const register = createAsyncThunk('auth/register', async (credentials) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    //  tocen.set{data.tocen}
    console.log('data', response.data)
    return response.data;
  } catch (error) {
    console.log('error-reg', error);
  }
});

// Post @ /users/login
// body:{email,password}
// если успешно => добавляем tocen в НТТРзаголовок

 const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    //tocen.set{data.tocen}
    return response.data;
  } catch (error) {
    console.log('error-login', error);
    // error.response.data
  }
});

// Post @ /users/logOut
//headers: Authorization: Bearer token
// если успешно login=> удаляем tocen в НТТРзаголовок

// export  const logOut = createAsyncThunk('auth/logout', async (body) => {
//   try {
//     await axios.post('/users/logout');
//     //tocen.unset{};
//     return data;
//   } catch (error) {
//     console.log('error-logout', error);
//   }
// });


const authOperations = {
  register,
  // logOut,
   logIn,
  // fetchCurrentUser,
};
export default authOperations;
