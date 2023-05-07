import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
  return fetchContacts();
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
