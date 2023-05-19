import {
  createPhoneContacts,
  deletePhoneContacts,
  getPhoneContacts,
} from 'store/phone/thunks.js';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { filterChange } from 'store/filter/slice';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

import css from 'components/Filter/Filter.module.css';

export const PhoneContacts = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneContacts());
  }, [dispatch]);

  const createContact = contact => {
    if (
      items.some(el => el.name === contact.name && el.number === contact.number)
    ) {
      return toast.success(`${contact.name} is already in contacts`);
    } else {
      dispatch(createPhoneContacts(contact));
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

  const onChange = (filters) => {
    // console.log('filter', filters);
  
     dispatch(filterChange(filters)); //?????
  };


  const filteredContacts = () => {
    // console.log('filter', filters);
    if (filters) {
      // console.log('filter-filterContacts', filters)
      // console.log('items', items)
      const visibleFriends = items.filter(({ name }) =>
      name.toLowerCase().includes(filters.toLowerCase())
    );
      // console.log('visibleFriends', visibleFriends);
      return visibleFriends;
    } else {
      return items;
    }
  };

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

      {items.length > 1 && <Filter filter={filters} onChange={onChange} />}
      {items.length > 0 ? (
        <ContactList contacts={filteredContacts()} onDelete={removeContact} />
      ) : (
        <p className="title">No contacts</p>
      )}
    </div>
  );
};
