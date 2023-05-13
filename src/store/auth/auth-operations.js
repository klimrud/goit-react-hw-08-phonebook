import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Post @ /users/signup
// body:{name,email,password}
// если успешно => добавляем tocen в НТТРзаголовок

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    // setAuthHeader(response.data.tocen)
    token.set(data.token);
    console.log('data', data);
    return data;
  } catch (error) {
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который
      // выходит за пределы 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      console.log(error.request);
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
});

// Post @ /users/login
// body:{email,password}
// если успешно => добавляем tocen в НТТРзаголовок

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    //  setAuthHeader(response.data.tocen)
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('error-login', error);
    // error.response.data
  }
});

// Post @ /users/logOut
//headers: Authorization: Bearer token
// если успешно login=> удаляем tocen в НТТРзаголовок

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    //  clearAuthHeader();
    token.unset();
  } catch (error) {
    console.log('error-logout', error);
  }
});

// const authOperations = {
//   register,
//   // logOut,
//    logIn,
//   // fetchCurrentUser,
// };
// export default authOperations;
