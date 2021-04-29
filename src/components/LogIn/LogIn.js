import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { getTheme } from "../../redux/theme/theme-selectors";
import { authSelectors } from '../../redux/auth';
import styles from "./LogIn.module.css";
import routes from '../../routes';
import authSprite from "./login-sprite.svg";
import avatar from "./avatar.png";

const LogIn = ({ themeLight, name }) => {
  return (
    <div className={styles.box}>
      <div className={styles.user}>
        <img className={styles.img} src={avatar} alt="Аватар пользователя" />
        <h3 className={themeLight ? styles.nameLight : styles.nameDark}>{name}</h3>
      </div>
      <NavLink
        exact
        to={routes.home}
        className={themeLight ? styles.btnLight : styles.btnDark}
        //   onClick={onClick}
      >
        {themeLight ? (
          <svg className={styles.iconLight} width="20" height="20">
            <use href={`${authSprite}#icon-exit`}></use>
          </svg>
        ) : (
          <svg className={styles.iconDark} width="20" height="20">
            <use href={`${authSprite}#icon-exit`}></use>
          </svg>
        )}
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
    name: authSelectors.getUsersName(state)
  };
};

export default withTranslation()(connect(mapStateToProps)(LogIn));
