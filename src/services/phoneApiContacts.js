import axios from 'axios';
import { token } from '../store/auth/auth-operations';
import { toast } from 'react-toastify';



axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    //  console.log('data', data)
    return data;
  } catch (error) {
    // console.log('error-getContacts', error);
  }
};

export const addContact = async contact => {
  try {
    const { data } = await axios.post(`/contacts`, contact);
    // console.log('data', data)
    token.set(data.token);
    return data;
  } catch (error) {
    return toast.success(`${contact.name} is already in contacts`);
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);

    return data;
  } catch (error) {
    // console.log('error-deleteContacts', error);
    return toast.success(`is  delete in contacts`);
  }
};

// Update an existing contact
export const patchContact = async id => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`);

    return data;
  } catch (error) {
    console.log('error-patchContacts', error);
  }
};
