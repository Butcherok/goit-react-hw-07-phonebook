// import { useEffect, useState } from 'react';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';
import {
  ContactsTitle,
  Container,
  Phonebook,
  PhonebookTitle,
} from './App.styled';

export default function App() {

  return (
    <Container>
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList
        ></ContactList>
      </Phonebook>
    </Container>
  );
}
