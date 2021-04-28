import { connect } from 'react-redux';
import * as actionsTheme from '../../redux/theme/theme-actions';
import PropTypes from 'prop-types';
import { getTheme } from '../../redux/theme/theme-selectors';
import themeSprite from "./theme-sprite.svg";
import styles from './BtnTheme.module.css';

const BtnTheme = ({ themeLight, onClick }) => {
  return (
    <button
      className={themeLight ? styles.btnLight : styles.btnDark}
      onClick={onClick}
    >
      {themeLight ? (
        <svg className={styles.iconLight} width="20" height="20">
          <use href={`${themeSprite}#icon-night`}></use>
        </svg>
      ) : (
        <svg className={styles.iconDark} width="20" height="20">
          <use href={`${themeSprite}#icon-light`}></use>
        </svg>
      )}
    </button>
  );
};

BtnTheme.propTypes = {
  themeLight: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    themeLight: getTheme(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(actionsTheme.changeTheme()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BtnTheme);
