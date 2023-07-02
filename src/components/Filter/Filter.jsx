import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../Redux/Contacts/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const changeFilterValue = (e) => {
    handleFilterChange(e.currentTarget.value);
  };

  return (
      <div className={css.filterContainer}>
        <label className={css.filterLabel}>
          <p className={css.filterText}>Find contacts by name</p>
        </label>
        <input
          className={css.filterInput}
          type="text"
          onChange={changeFilterValue}
        />
      </div>
  );
};

export default Filter;
