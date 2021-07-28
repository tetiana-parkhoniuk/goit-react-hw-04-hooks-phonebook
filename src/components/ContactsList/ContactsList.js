import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/';
import styles from 'components/ContactsList/ContactsList.module.css';

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
