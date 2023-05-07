import { addContact, selectContacts } from '../../redux/index';
import {
  AddContactBtn,
  NameInput,
  NameLabel,
  NewContactForm,
  NumberInput,
  NumberLabel,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameContact = form.elements.name.value.trim();
    const numberContact = form.elements.number.value.trim();

    const searchTwins = contacts.some(
      contact =>
        contact.name.toLowerCase() ===
        form.elements.name.value.toLowerCase().trim()
    );

    if (searchTwins) {
      alert(`${form.elements.name.value.trim()} is already in contacts`);
      form.reset();
      return;
    }
    dispatch(addContact({name: nameContact, phone: numberContact}));

    form.reset();
  };

  return (
    <NewContactForm onSubmit={onSubmit}>
      <NameLabel htmlFor="nameContact">Name</NameLabel>
      <NameInput
        type="text"
        name="name"
        id="nameContact"
        placeholder="Jack Jonson"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batze Castelmore d'Artagnan"
        required
      />
      <NumberLabel htmlFor="numberContact">Number</NumberLabel>
      <NumberInput
        type="tel"
        name="number"
        id="numberContact"
        placeholder="123-45-67"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </NewContactForm>
  );
}
