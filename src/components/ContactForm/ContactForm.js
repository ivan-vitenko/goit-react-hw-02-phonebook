import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

let nameIsAlreadyAdded = false;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    // nameIsAlreadyAdded: false,
  };

  //   handleChange = e => {
  //     const inputName = e.target.name;
  //     this.setState({ [inputName]: e.target.value });
  //   };

  handleChange = e => {
    const inputName = e.target.name;
    this.setState({ [inputName]: e.target.value });

    if (inputName === 'name') {
      nameIsAlreadyAdded = false;
    }
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  //   addContact = () => {
  //     const contact = {
  //       id: uuid(),
  //       name: this.state.name,
  //       number: this.state.number,
  //     };

  //     if (!this.state.nameIsAlreadyAdded) {
  //       this.props.contacts.setState(({ contacts }) => ({
  //         contacts: [contact, ...contacts],
  //       }));

  //       this.resetState();
  //     }
  //   };

  addContact = () => {
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (!nameIsAlreadyAdded) {
      this.props.contacts.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));

      this.resetState();
    }
  };

  duplicateСheck = () => {
    if (this.state.name && this.state.number) {
      this.props.contacts.state.contacts.map(item => {
        if (item.name.toLowerCase().includes(this.state.name.toLowerCase())) {
          alert(`${item.name} is already in contacts.`);
          nameIsAlreadyAdded = true;
        }
      });
    }
    this.addContact();
  };

  //   duplicateСheck = () => {
  //     if (this.state.name && this.state.number) {
  //       this.props.contacts.state.contacts.map(item => {
  //         if (item.name.toLowerCase().includes(this.state.name.toLowerCase())) {
  //           alert(`${item.name} is already in contacts.`);
  //           this.setState({ nameIsAlreadyAdded: true }, this.resetState);
  //         } else {
  //           return;
  //         }
  //       });
  //     }
  //     this.addContact();
  //   };

  handleSubmit = e => {
    e.preventDefault();

    this.duplicateСheck();
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Phone number
          <input
            name="number"
            type="number"
            placeholder="Enter number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
