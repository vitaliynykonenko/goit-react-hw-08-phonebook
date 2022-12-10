import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

import { List, Item, Text, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <Text>
          {contact.name}: {contact.number}
          </Text>
          <Button
            type="button"
            onClick={() => deleteSelectedContact(contact.id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
