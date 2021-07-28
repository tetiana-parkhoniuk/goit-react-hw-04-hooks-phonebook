import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import styles from 'App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ??
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  });
  const [filter, setFilter] = useState('');
  const filterInputId = uuidv4();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      toast.error('Please enter at least some data');
    } else {
      setContacts(prevState => 
        [contact, ...prevState],
      );
    }
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)
    ));
  };


  return (
    <div className={styles.container}>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter
        id={filterInputId}
        value={filter}
        onChange={changeFilter}
      />
      <ContactsList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  )
}


////==== Original Code ====////

// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

  // filterInputId = uuidv4();

//   // Local Storage Start //

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   // Local Storage End //

  // addContact = ({ name, number }) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   if (
  //     this.state.contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     toast.error(`${name} is already in contacts.`);
  //   } else if (name.trim() === '' || number.trim() === '') {
  //     toast.error('Please enter at least some data');
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [contact, ...prevState.contacts],
  //     }));
  //   }
  // };

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  // getFilteredContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div className={styles.container}>
//         <Toaster position="top-right" toastOptions={{ duration: 2000 }} />

//         <h1>Phonebook</h1>

//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contacts</h2>

//         <Filter
//           id={this.filterInputId}
//           value={filter}
//           onChange={this.changeFilter}
//         />

//         <ContactsList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
