import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './index';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filterList: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filterList } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
