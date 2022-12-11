import { ContactForm } from 'components/Phonebook/ContactForm/ContactForm';
import { ContactList } from 'components/Phonebook/ContactList/ContactList';
import { Container } from 'components/Phonebook/container';
import Filter from 'components/Phonebook/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Section, H1, H2 } from './contacts.styled';


const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
      <Section>
        <H1>Phonebook</H1>
        <ContactForm />
        <H2>Contacts</H2>
        <Filter />
        <ContactList />
      </Section>
      </Container>
    </>
  );
};
export default ContactsPage;
