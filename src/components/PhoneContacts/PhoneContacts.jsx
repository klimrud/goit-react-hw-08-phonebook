import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from '@mui/icons-material';
import { ContactList } from 'components/ContactList/ContactList';
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {Filter} from 'components/Filter/Filter'

import { filterChange } from 'store/filter/slice';
import {
  createPhoneContacts,
  deletePhoneContacts,
  getPhoneContacts,
} from 'store/phone/thunks.js';
import { useEffect } from 'react';

import css from 'components/Filter/Filter.module.css';

export const PhoneContacts = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneContacts());
  }, [dispatch]);

  const createContact = contact => {
    if (
      items.some(el => el.name === contact.name && el.phone === contact.phone)
    ) {
      toast.success(`${contact.name} is already in contacts`);
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

  const changeFilter = filter => {
    dispatch(filterChange(filter));
  };

  const filteredContacts = () => {
    if (filter) {
      const visibleFriends = items.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
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

      {items.length>1 && <Filter filter={filter} onChange={changeFilter} />}
      {items.length>0 ? (
        <ContactList contacts={filteredContacts()} onDelete={removeContact} />
      ) : (
        <p className="title">No contacts</p>
      )}

      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: 'rgb(47, 155, 255)',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  );
};
