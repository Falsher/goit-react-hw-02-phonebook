import React, { Component } from 'react';
import shortid from 'shortid';
class Phonebook extends Component {
  state = {
    textName: '',
    number: '',
  };
  nameInputId = shortid.generate();
  hadleInputChange = e => {
    this.setState({ textName: e.currentTarget.value });
  };
  hadleInputNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.textName, this.state.number);
    this.reset();
  };
  reset = () => {
    this.setState({ textName: '' });
    this.setState({ number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.textName}
            onChange={this.hadleInputChange}
          />
        </label>
        <label>
          Number phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.hadleInputNumber}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Phonebook;
