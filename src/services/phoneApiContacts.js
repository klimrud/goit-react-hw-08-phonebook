import axios from 'axios';
import { token } from '../store/auth/auth-operations';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    console.log('error-getContacts', error);
    return toast.error('contact not received');
  }
};

export const addContact = async contact => {
  try {
    const { data } = await axios.post(`/contacts`, contact);

    token.set(data.token);
    return data;
  } catch (error) {
    return toast.error('contact not added');
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);

    return data;
  } catch (error) {
    return toast.error('contact not deleted');
  }
};

// Update an existing contact
export const patchContact = async id => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`);

    return data;
  } catch (error) {}
};
