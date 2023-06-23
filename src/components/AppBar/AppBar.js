import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/User.Menu';
import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from './AppBar.styled';


export const AppBar = () => {
  const isloggedIn = useSelector(selectIsLoggeIn);

  return (
    <Header>
      <Navigation />
      {isloggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
