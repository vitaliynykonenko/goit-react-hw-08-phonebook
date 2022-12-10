import { Form } from 'components/Phonebook/ContactForm/ContactForm.styled';
// import { Container } from 'components/Phonebook/cotainer';
// import { Input } from 'components/Phonebook/Filter/Filter.styled';
// import { Span } from 'pages/Register/Register.styled';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import {  Section, H2, Label, Input, Button } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(logIn({ email: form.email.value, password: form.password.value }));
  };
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
      <Section>
      <H2 >Please enter your email and password</H2>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>Email
              <Input type="email" 
              name="email" 
              pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
              title="Enter your email"
              placeholder="Example user@mail.com"
              required
              
              />
            </Label>
          <Label>Password
              <Input type="password" 
              name="password" 
              title="Enter your password"
              required
              
              />
            </Label>
          <Button type="submit">Login</Button>
        </Form>
      </Section>
    </>
  );
};
export default Login;
