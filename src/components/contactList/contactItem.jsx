import PropTypes from 'prop-types';
import { ContactName, ContactNumber } from './contactItem.styled';

export default function ContactItem({ name, phone }) {
  return (
    <>
      <ContactName>{name}: </ContactName>
      <ContactNumber>{phone}</ContactNumber>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
