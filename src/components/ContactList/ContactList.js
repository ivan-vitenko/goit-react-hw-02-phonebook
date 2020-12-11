import React, { Component } from 'react';

class ContactList extends Component {
  deleteContact = contactId => {
    this.props.appThis.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <ul>
        {this.props.appThis.state.contacts.map(
          item =>
            item.name
              .toLowerCase()
              .includes(this.props.appThis.state.filter.toLowerCase()) && (
              <li key={item.id}>
                {item.name}: {item.number}{' '}
                <button
                  type="button"
                  onClick={() => this.deleteContact(item.id)}
                >
                  Delete
                </button>
              </li>
            ),
        )}
      </ul>
    );
  }
}

export default ContactList;
