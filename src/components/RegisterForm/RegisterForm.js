import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <Input type="text" name="name" size={'sm'} width={'300px'} borderColor={'#56bd77'}/>
      </label>
      <label>
        Email
        <Input type="email" name="email"  size={'sm'} width={'300px'} borderColor={'#56bd77'}/>
      </label>
      <label>
        Password
        <Input type="password" name="password" size={'sm'} width={'300px'} borderColor={'#56bd77'}/>
      </label>
      <Button type="submit" size={'sm'}>Register</Button>
    </form>
  );
};
