import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

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

  handleChange = e => {
    const inputName = e.target.name;
    this.setState({ [inputName]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm contacts={this} />

        <h2>Contacts</h2>
        {Boolean(this.state.contacts.length) && (
          <div>
            <Filter filter={this} />

            <ContactList
              appThis={this}
              // contacts={this.state.contacts}
              // filter={this.state.filter}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
