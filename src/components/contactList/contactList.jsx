import ContactItem from './contactItem';
import {
  ContactDeleteBtn,
  ContactsItem,
  ContactsList,
} from './contactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/index';

export default function ContactList() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const getFilterContact = () =>
    contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ContactsList>
      {getFilterContact().map(({ id, name, number }) => {
        return (
          <ContactsItem className="contact" key={id}>
            <ContactItem name={name} number={number} />
            <ContactDeleteBtn
              className="contactDeleteBtn"
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </ContactDeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
}