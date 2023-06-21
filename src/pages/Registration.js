import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from 'redux/auth/selectors';

export default function Register() {
  const isloggedIn = useSelector(selectIsLoggeIn)
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {!isloggedIn && < RegisterForm />}
    </div>
  );
}
