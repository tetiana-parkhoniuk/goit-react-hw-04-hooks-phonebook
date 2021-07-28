import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from 'components/ContactForm/ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.formLabel} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          className={styles.formInput}
          onChange={this.handleInputChange}
        />

        <label className={styles.formLabel} htmlFor={this.nameInputId}>
          Number
        </label>
        <input
          type="text"
          name="number"
          id={this.numberInputId}
          value={this.state.number}
          className={styles.formInput}
          onChange={this.handleInputChange}
        />

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
