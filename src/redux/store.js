import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';





export const store = configureStore({
  reducer: {
    auth:  authReducer,
    contacts: contactsReducer,
  },
 
});


