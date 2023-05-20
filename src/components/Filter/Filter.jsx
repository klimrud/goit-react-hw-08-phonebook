import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BiSearchAlt2 } from 'react-icons/bi';
import { filterChange } from 'store/filter/slice';

import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    setValue(e.target.value);
    dispatch(filterChange(e.target.value));
  };
  return (
    <div>
      <div className={css.filterContainer}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <BiSearchAlt2 className={css.iconFilter} />
        <input
          className={css.filterInput}
          type="text"
          name="name"
          value={value}
          onChange={handleFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </div>
  );
};

