import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';
import { fetchContacts, selectError, selectIsLoading } from '../redux/index';
import { Loader } from './loader/loader';
import {
  ContactsTitle,
  Container,
  Phonebook,
  PhonebookTitle,
} from './App.styled';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    if (error) {
      alert.error(error);
    }
  }, [dispatch, error]);


  return (
    <Container>
      {isLoading && <Loader />}
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {!isLoading && !error && <ContactList />}
      </Phonebook>
    </Container>
  );
}
