import { LogOutDiv } from 'components/UserMenu/UserMenu.styled';
import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
  return (
    <LogOutDiv>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </LogOutDiv>
  );
};
