import React, { lazy } from 'react';
// import { ContactForm } from './ContactsForm/ContactsFrom';
// import { ContactList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { Section } from './App/App.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
// import Home from '../pages/Home';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Registr = lazy(() => import('../pages/Registration'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Registr />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>

    // <Section>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   {/* <Filter /> */}
    //   <h2>Contacts</h2>
    //   <ContactList />
    // </Section>
  );
};

// contacts = { visible };
