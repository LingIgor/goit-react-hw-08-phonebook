import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/User.Menu';
import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

export const AppBar = () => {
  const isloggedIn = useSelector(selectIsLoggeIn);

  return (
    <header>
      <Navigation />
      {isloggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
