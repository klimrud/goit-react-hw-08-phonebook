import { createSlice } from '@reduxjs/toolkit';
import { initialStateFilter } from './initial';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,

  reducers: {
    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// Selectors
export const getFilter = state => state.filter.filter;
