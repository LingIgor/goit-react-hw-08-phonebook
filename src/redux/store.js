import { configureStore} from '@reduxjs/toolkit';


import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import { filterReducer } from './filterSlice/filterSlice';





export const store = configureStore({
  reducer: {
    auth:  authReducer,
    contacts: contactsReducer,
    filters: filterReducer,
  },
 
});


