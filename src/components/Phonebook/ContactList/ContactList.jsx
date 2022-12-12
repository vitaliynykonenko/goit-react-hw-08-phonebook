import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter, getLoading } from 'redux/contacts/selectors';
import { List, Item, Text, Button } from './ContactList.styled';
import { Loader } from 'components/Phonebook/Loader/Loader';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));
  
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
    {isLoading && <Loader />}
        {contacts.length > 1}
        {contacts.length > 0 ? (
       <List>
      {visibleContacts.map(({id, name, number}) => (
        <Item key={id}>
          <Text>
          {name}: {number}
          </Text>
          <Button
            type="button"
            onClick={() => deleteSelectedContact(id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>) : (
          <p
            style={{
              marginBottom: '25px',
              lineHeight: '1.15',
            }}
          >
            You have no contacts saved
          </p>
        )}

    </>
    );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
