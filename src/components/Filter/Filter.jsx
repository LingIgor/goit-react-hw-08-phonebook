import React from 'react';
import { Input } from '@chakra-ui/react';
import { Box, Title } from 'components/ContactsForm/ContactsForm.styled';

import {
  Label, 
  Form,
} from 'components/ContactsForm/ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Form>
      <Box>
      <Label>
        
      <Title>Find contacts by name</Title>
        <Input name="filter" onChange={onChangeFilter} size={'sm'} width={'300px'} borderColor={'#56bd77'}/>
      </Label>
      </Box>
    </Form>
  );
};
