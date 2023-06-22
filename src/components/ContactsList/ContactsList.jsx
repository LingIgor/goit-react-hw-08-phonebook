import React from 'react';
import { Item, List, Button, Loading } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);

  const filterContact = useSelector(state => state.filters.filter);

  const dispatch = useDispatch();

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContact)
    );
  };

  const visible = getVisibleContacts();

  return (
    <>
      <Loading>{isLoading && <p>Loading...</p>}</Loading>

      <List>
        {visible.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              {name}: {number}
              <Button type="button" onClick={() => delContact(id)}>
                delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};
