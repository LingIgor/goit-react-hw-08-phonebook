import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Label, Form, Title, Input, Add } from './ContactsForm.styled';
import { addContacts } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    console.log(e.target.name.value);
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.phone.value,
    };
    console.log(contact);
    if (contacts.find(({ name }) => name === contact.name)) {
      alert('sorry');
      return;
    }
    dispatch(addContacts(contact));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
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
        />
      </Label>
      <Add type="submit">add contact</Add>
    </Form>
  );
};
