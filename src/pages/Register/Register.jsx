import { Form } from 'components/Phonebook/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Section, H2, Label, Input, Button } from './Register.styled';
const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <Section>
      <H2 >Please enter your registration details</H2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>Username
            <Input type="text" 
            name="name" 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Example John"
            required
           
            />
          </Label>
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
            required
            
            />
          </Label>
               <Button type="submit">Register</Button>
      </Form>
    </Section>
  );
};
export default Register;
