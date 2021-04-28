import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import { getTheme } from '../../redux/theme/theme-selectors';
import deleteImg from './delete.png';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, themeLight, delContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(item => (
        <li
          className={themeLight ? styles.item : styles.itemDark}
          key={item.id}
        >
          <span className={styles.name}>{item.name}</span>
          <span>{item.number}</span>
          <button className={styles.btn} onClick={() => delContact(item.id)}>
            {' '}
            <img className={styles.img} src={deleteImg} alt="" width="10" />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  themeLight: PropTypes.bool.isRequired,
  delContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: phonebookSelectors.getVisibleContacts(state),
    themeLight: getTheme(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delContact: contactId => dispatch(phonebookOperations.delContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
