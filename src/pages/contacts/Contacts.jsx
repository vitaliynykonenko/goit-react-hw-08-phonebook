import { ContactForm } from 'components/Phonebook/ContactForm/ContactForm';
import { ContactList } from 'components/Phonebook/ContactList/ContactList';
import { Container } from 'components/Phonebook/container';
import Filter from 'components/Phonebook/Filter/Filter';
import { Loader } from 'components/Phonebook/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { getContacts, getLoading } from 'redux/selectors';
import { Section, H1, H2 } from './contacts.styled';


const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
      <Section>
        <H1>Phonebook</H1>
        <ContactForm />
        <H2>Contacts</H2>
        {isLoading && <Loader />}
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p
            style={{
              marginBottom: '25px',
              lineHeight: '1.15',
            }}
          >
            You have no contacts saved
          </p>
        )}
        </Section>
      </Container>
    </>
  );
};
export default ContactsPage;
