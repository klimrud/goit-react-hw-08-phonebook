import { combineReducers } from 'redux';

import { filterReducer } from './filter/slice';
import { phoneReducer } from './phone/slice';
// import { authReduser } from './auth/auth-slice';


 export const reducer = combineReducers({
// export const reducerContacts = combineReducers({
  contacts: phoneReducer,
  filter: filterReducer,
  //  auth: authReducer,

});
