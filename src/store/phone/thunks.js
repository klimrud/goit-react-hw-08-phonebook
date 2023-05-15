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
    console.log('data-addCont', data)
    await addContact(data);

    return data;
  }
);

export const deletePhoneContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    console.log('id', id)
    return await deleteContact(id);
  }
);
