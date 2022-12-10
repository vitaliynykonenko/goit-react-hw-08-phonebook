import { NavLink } from 'react-router-dom';
import { Header, Button } from './AuthForm.styled';

export const AuthNav = () => {
  return (
    <Header>
      <NavLink to="/login">
        <Button>Log In</Button>
      </NavLink>
      <NavLink to="/register">
        <Button>Register</Button>
      </NavLink>
    </Header>
  );
};
