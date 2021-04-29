import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { getTheme } from "../../redux/theme/theme-selectors";
import routes from '../../routes';
import styles from "./AuthNav.module.css";
import authSprite from "./auth-sprite.svg";

const AuthNav = ({ themeLight }) => {
  return (
    <div className={styles.box}>
      <NavLink
        exact
        to={routes.register}
        className={themeLight ? styles.btnLight : styles.btnDark}
        activeClassName={styles.btnActive}
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
      </NavLink>
      <NavLink
        exact
        to={routes.login}
        className={themeLight ? styles.btnLight : styles.btnDark}
        activeClassName={styles.btnActive}
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
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

export default withTranslation()(connect(mapStateToProps)(AuthNav));
