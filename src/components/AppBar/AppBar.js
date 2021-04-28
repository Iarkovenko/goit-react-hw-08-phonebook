import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { getTheme } from "../../redux/theme/theme-selectors";
import routes from "../../routes";
import Auth from "../Auth";
import LogIn from "../LogIn";
import BtnTheme from "../BtnTheme";
import BtnLanguage from "../BtnLanguage";
import styles from "./AppBar.module.css";

const AppBar = ({ t, themeLight }) => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <NavLink
          exact
          to={routes.home}
          className={themeLight ? styles.link : styles.linkDark}
          activeClassName={styles.linkActive}
        >
          {t("homeView")}
        </NavLink>
        <NavLink
          exact
          to={routes.phonebook}
          className={themeLight ? styles.link : styles.linkDark}
          activeClassName={styles.linkActive}
        >
          {t("phonebookView")}
        </NavLink>
      </div>
      <div className={styles.box}>
        <LogIn />
        <Auth />
        <BtnTheme />
        <BtnLanguage />
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

export default withTranslation()(connect(mapStateToProps)(AppBar));
