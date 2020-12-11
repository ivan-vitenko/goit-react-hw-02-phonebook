import React, { Component } from 'react';

class Filter extends Component {
  handleChange = e => {
    const inputName = e.target.name;
    this.props.filter.setState({ [inputName]: e.target.value });
  };

  render() {
    return (
      <label>
        Find contact by name
        <input
          name="filter"
          type="text"
          placeholder="Enter to find"
          value={this.props.filter.state.filter}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Filter;
