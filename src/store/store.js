import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import { reducer as rootReducer } from './reducer';

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
import { reducerContacts } from './reducer';
import { authReducer } from './auth/auth-slice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter', /'auth'/],
// };

const middleware =[ 
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

//  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: reducerContacts,
  },
  middleware,
  //  getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  devTools: process.env.NODE_ENV === 'development',
});

// // Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const persistor = persistStore(store);
