import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/UseAuth';
import { Nav, Menu, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Nav>
    <Menu>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      </Menu>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
      </Nav>
  );
};
