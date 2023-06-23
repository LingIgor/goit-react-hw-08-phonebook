import { LogOutDiv } from 'components/UserMenu/UserMenu.styled';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggeIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggeIn); 

  return (
    <nav>
      <LogOutDiv>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </LogOutDiv>
    </nav>
  );
};
