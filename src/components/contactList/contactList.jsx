import ContactItem from './contactItem';
import {
  ContactDeleteBtn,
  ContactsItem,
  ContactsList,
} from './contactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectFiltredContacts  } from '../../redux/index';

export default function ContactList() {
  const filtredContacts = useSelector(selectFiltredContacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <ContactsItem className="contact" key={id}>
            <ContactItem name={name} phone={phone} />
            <ContactDeleteBtn
              className="contactDeleteBtn"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactDeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
}