import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionsPhonebook from '../../redux/phonebook/phonebook-actions';
import { withTranslation } from 'react-i18next';
import { phonebookSelectors } from '../../redux/phonebook';
import styles from './Filter.module.css';

const Filter = ({ value, onChange, t}) => {
  return (
    <div className={styles.filter}>
      <p className={styles.title}>{t("filter")}</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    value: phonebookSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({ currentTarget: { value } }) =>
      dispatch(actionsPhonebook.filter(value)),
  };
};

export default  withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Filter));
