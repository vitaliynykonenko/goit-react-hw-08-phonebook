import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/UseAuth';
import { Nav, Button } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">
        <Button>Contacts</Button>
        </NavLink>}
    </Nav>
  );
};
