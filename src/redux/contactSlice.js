import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './index';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunks';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactReducer = contactsSlice.reducer;
