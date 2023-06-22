import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from 'redux/auth/selectors';

export default function Login() {
  const isloggedIn = useSelector(selectIsLoggeIn)
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
     {!isloggedIn &&  <LoginForm />}
    </HelmetProvider>
  );
}
