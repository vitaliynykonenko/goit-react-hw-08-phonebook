import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from './ContactForm.styled';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhoneNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setPhoneNumber(value);
  };
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
            Notify.failure(`Contact '${name}' is already exist`);
   
    } else {
      dispatch(addContact(contact));
    }
    setName('');
    setPhoneNumber('');
  };


  return (
    <Form onSubmit={handleSubmit}>
      <p>Name</p>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />
      <p>Number</p>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
