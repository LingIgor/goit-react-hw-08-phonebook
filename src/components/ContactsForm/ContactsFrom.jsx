import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Label, Form, Title,  Add } from './ContactsForm.styled';
import { Input } from '@chakra-ui/react';
import { addContacts } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import { Box } from './ContactsForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
   
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.phone.value,
    };
   
    if (contacts.find(({ name }) => name === contact.name)) {
      alert('sorry');
      return;
    }
    dispatch(addContacts(contact));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
      <Label htmlFor={nameInputId}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          width={'300px'}
          borderColor={'#56bd77'}
        />
      </Label>

      <Label htmlFor={numberInputId}>
        <Title>Number</Title>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          width={'300px'}
          borderColor={'#56bd77'}
        />
      </Label>
      <Add type="submit">add contact</Add>
      </Box>
    </Form>
  );
};
