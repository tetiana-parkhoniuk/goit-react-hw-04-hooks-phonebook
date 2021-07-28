import PropTypes from 'prop-types';
import styles from 'components/Filter/Filter.module.css';

export default function Filter({ id, value, onChange }) {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={id}
        value={value}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
