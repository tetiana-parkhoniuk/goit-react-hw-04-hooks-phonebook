import PropTypes from 'prop-types';
import styles from 'components/ContactsListItem/ContactsListItem.module.css';

export default function ContactsListItem({
  id,
  name,
  number,
  onDeleteContact,
}) {
  return (
    <li className={styles.contactItem}>
      {name}: {number}
      <button className={styles.deleteBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
