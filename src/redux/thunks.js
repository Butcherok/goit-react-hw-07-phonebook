import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'redux/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', () => {
  return getContacts();
});

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  data => {
    return addContact(data);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    return deleteContact(id);
  }
);
