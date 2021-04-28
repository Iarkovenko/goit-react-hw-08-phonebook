import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { getTheme } from "../../redux/theme/theme-selectors";
import styles from "./LogIn.module.css";
import authSprite from "./login-sprite.svg";
import avatar from "./avatar.jpeg";

const LogIn = ({ themeLight }) => {
  return (
    <div className={styles.box}>
      <div className={styles.user}>
        <img className={styles.img} src={avatar} alt="Аватар пользователя" />
        <h3 className={themeLight ? styles.nameLight : styles.nameDark}>User</h3>
      </div>
      <button
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
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

export default withTranslation()(connect(mapStateToProps)(LogIn));
