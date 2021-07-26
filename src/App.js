import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/phonebook/container';
import Phonebook from './components/phonebook/phonebook';
import Contacts from './components/phonebook/contacts';
import Filter from './components/phonebook/filter';
import './components/phonebook/css/contacts.css';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmit = (name, number) => {
    const nameContact = {
      id: shortid.generate(),
      name,
      number,
      completed: false,
    };
    this.setState(prevState => ({
      contacts: [nameContact, ...prevState.contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
    return (
      <Container>
        <Phonebook onSubmit={this.formSubmit} />
        <div className="contactsDiv">
          <Contacts
            ContactsData={filterContact}
            onDeleteContact={this.deleteContacts}
          />
        </div>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
      </Container>
    );
  }
}
export default App;
