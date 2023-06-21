import React, { useEffect } from 'react';
import { Item, List, Button, Loading } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, fetchContacts} from 'redux/contacts/operations';

export const ContactList = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);
  const state = useSelector(state => state)
  const filterContact = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const delContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filterContact.filter)
  //   );
  // };

  // const visible = getVisibleContacts();

  return (
    <>
      <Loading>{isLoading && <p>Loading...</p>}</Loading>

      <List>
        {contacts.map((el) => {
          return (
            <Item key={el.id}>
              {el.name}: {el.phone}
              <Button type="button" >
                delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};
