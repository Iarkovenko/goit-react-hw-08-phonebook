import { Component } from 'react';
import { connect } from 'react-redux';
import {phonebookOperations} from '../../redux/phonebook';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { getTheme } from '../../redux/theme/theme-selectors';
import styles from './ContactForm.module.css';


class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    themeLight: PropTypes.bool.isRequired,
    t: PropTypes.func
  };

  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={this.props.themeLight ? styles.form : styles.formDark}
        onSubmit={this.handleSubmit}
      >
        <label className={styles.label}>
          {this.props.t('contactFormName')}
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={styles.label}>
          {this.props.t('contactFormNumber')}
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleNameChange}
          />
        </label>
        <button
          className={this.props.themeLight ? styles.btn : styles.btnDark}
          type="submit"
        >
          {this.props.t('contactFormBtn')}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeLight: getTheme(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: newContact =>
      dispatch(phonebookOperations.addContact(newContact)),
  };
};

export default withTranslation()(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm));
