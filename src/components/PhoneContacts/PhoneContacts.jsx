import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createPhoneContacts,
  deletePhoneContacts,
  getPhoneContacts,
} from 'store/phone/thunks.js';
import { getFilter } from 'store/filter/slice';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { toast } from 'react-hot-toast';

import css from 'components/Filter/Filter.module.css';

export const PhoneContacts = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneContacts());
  }, [dispatch]);

  const createContact = async contact => {
    try {
      const findContact = items.some(
        el => el.name.toLowerCase() === contact.name.toLowerCase()
      );

      if (findContact) {
        return toast.error(`${contact.name} is already in contacts`);
      }

      await dispatch(createPhoneContacts(contact));
      toast.success('Contact added successfully');
    } catch {
      console.error('error');
      toast.error('Something went wrong');
    }
  };

  const removeContact = async contactId => {
    try {
      await dispatch(deletePhoneContacts(contactId));
      toast.success('Contact deleted successfully');
    } catch {
      console.error('error');
      toast.error('Something went wrong');
    }
  };

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <div>
      <h2 className={css.title}>Phone book</h2>
      <ContactForm onSubmit={createContact} />

      <h2 className={css.title}>Contacts</h2>

      {items.length > 2 && <Filter />}
      {items.length > 0 ? (
        <ContactList contacts={filteredContacts} onDelete={removeContact} />
      ) : (
        <p className="title">No contacts</p>
      )}
    </div>
  );
};
