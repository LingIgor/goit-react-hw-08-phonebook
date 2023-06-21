import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from 'redux/auth/selectors';

export default function Login() {
  const isloggedIn = useSelector(selectIsLoggeIn)
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
     {!isloggedIn &&  <LoginForm />}
    </div>
  );
}
