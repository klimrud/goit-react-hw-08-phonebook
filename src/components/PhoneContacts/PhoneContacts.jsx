import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { filterChange } from 'store/filter/slice';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { toast } from 'react-hot-toast';

import {
  createPhoneContacts,
  deletePhoneContacts,
  getPhoneContacts,
} from 'store/phone/thunks.js';

import css from 'components/Filter/Filter.module.css';
import { filterChange } from 'store/filter/slice';

export const PhoneContacts = () => {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneContacts());
  }, [dispatch]);

  const createContact = contact => {
    if (
      contacts.some(
        el => el.name === contact.name && el.number === contact.number
      )
      //  items.some(el => el.name === contact.name && el.number === contact.number)
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

  const changeFilter = filter => {
    dispatch(filterChange(filter));
  };

  const filteredContacts = () => {
    if (filter) {
      // const visibleFriends = items.filter(el =>
      const visibleFriends = contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
      console.log('first', visibleFriends)
      return visibleFriends;
    } else {
        //  return contacts;
      //  return items;
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

      {/* {contacts.length>1 && */}
      <Filter filter={filter} onChange={changeFilter} />
     {/* } 
     {contacts.length>0 ? (  */}
      <ContactList contacts={filteredContacts()} onDelete={removeContact} />
       {/* ) : (  */}
      <p className="title">No contacts</p>
      {/* )}  */}
    </div>
  );
};
