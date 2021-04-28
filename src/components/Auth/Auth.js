import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { getTheme } from "../../redux/theme/theme-selectors";
import styles from './Auth.module.css';
import authSprite from "./auth-sprite.svg";

const Auth = ({ themeLight }) => {
  return (
    <div>
      <button
        className={themeLight ? styles.btnLight : styles.btnDark}
        //   onClick={onClick}
      >
        {themeLight ? (
          <svg className={styles.iconLight} width="20" height="20">
            <use href={`${authSprite}#icon-user-plus`}></use>
          </svg>
        ) : (
          <svg className={styles.iconDark} width="20" height="20">
            <use href={`${authSprite}#icon-user-plus`}></use>
          </svg>
        )}
      </button>
      <button
        className={themeLight ? styles.btnLight : styles.btnDark}
        //   onClick={onClick}
      >
        {themeLight ? (
          <svg className={styles.iconLight} width="20" height="20">
            <use href={`${authSprite}#icon-enter`}></use>
          </svg>
        ) : (
          <svg className={styles.iconDark} width="20" height="20">
            <use href={`${authSprite}#icon-enter`}></use>
          </svg>
        )}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

export default withTranslation()(
  connect(mapStateToProps)(Auth)
);