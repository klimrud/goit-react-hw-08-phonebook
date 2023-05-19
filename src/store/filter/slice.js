  // import { initialState } from './initial';

import { createSlice } from '@reduxjs/toolkit';




const filterSlice = createSlice({
  name: 'filters',
  //  initialState: initialStateFilter,
   initialState: '',

  reducers: {
    filterChange(state, action) {
      // console.log('action', action)
       return {
         ...state,
        filters: action.payload,
       };
    },
  },
});

export const  filterChange  = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
