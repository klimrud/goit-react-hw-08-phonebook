import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'services/phoneApiContacts';

export const getPhoneContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const createPhoneContacts = createAsyncThunk(
  'contacts/addContact',
  async data => {
    const result = await addContact(data);
    return result;
  }
);

export const deletePhoneContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
