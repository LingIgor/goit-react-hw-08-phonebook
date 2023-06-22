import React from 'react';

import { Label, Input, Form } from 'components/ContactsForm/ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Form>
    <Label>
      <h3>Find contacts by name</h3>
      <Input name="filter"  onChange={onChangeFilter}/>
    </Label>
    </Form>


//     <form>
//       <label>
//       <h3>Find contacts by name</h3>
//         <input name ="filter"/>
//       </label>
//       </form>
  );
};
