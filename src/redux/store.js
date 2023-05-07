import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './index';

export const store = configureStore({
  reducer: { contacts: contactReducer, filter: filterReducer },
});