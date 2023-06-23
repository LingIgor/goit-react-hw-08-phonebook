import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <Input type="email" name="email"  size={'sm'} width={'300px'}  borderColor={'#56bd77'}/>
      </label>
      <label>
        Password
        <Input type="password" name="password" size={'sm'} width={'300px'} borderColor={'#56bd77'}/>
      </label>
      <Button type="submit" size={'sm'}>Log In</Button>
    </form>
  );
};
