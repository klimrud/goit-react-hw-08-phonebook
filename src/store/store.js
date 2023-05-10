import { configureStore} from '@reduxjs/toolkit';
// import { reducer, reducer as rootReducer } from './reducer';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducerContacts}  from './reducer';
 import {authReduser} from './auth/auth-slice';


// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

const authPersistConfig ={
  key: 'auth',
  storage,
  whitelist: ['token'],
}

// const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: 
  { 
    auth: persistReducer(authPersistConfig ,authReduser),
    contacts: reducerContacts,
  }, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
});

// // Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const persistor = persistStore(store);
