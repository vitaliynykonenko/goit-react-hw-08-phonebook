import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { onFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Container, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(onFilter(e.currentTarget.value));
  };
  return (
    <Container>
      <label>
      Find contact by name
             
          <Input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Find contacts by name"
            placeholder="Enter search request here"
            value={filter}
            onChange={handleFilter}
          />
        </label>
      </Container>
   
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
