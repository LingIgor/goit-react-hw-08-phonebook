import { Helmet, HelmetProvider} from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from 'redux/auth/selectors';

export default function Register() {
  const isloggedIn = useSelector(selectIsLoggeIn)
  return (
    <HelmetProvider>
    <Helmet>
        <title>Registration</title>
      </Helmet>
      {!isloggedIn && < RegisterForm />}
    </HelmetProvider>
  );
}
