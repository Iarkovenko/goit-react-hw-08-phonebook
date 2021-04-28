import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { getTheme } from "../../redux/theme/theme-selectors";
import styles from "./BtnLanguage.module.css";

const BtnLanguage = ({ themeLight, i18n }) => {
  function handleClick(event) {
    i18n.changeLanguage(event.target.name);
    console.log(i18n);
  }

  return (
    <div onClick={handleClick}>
      {i18n.language === "ru" ? (
        <button
          name="en"
          className={themeLight ? styles.btnLight : styles.btnDark}
        >
          EN
        </button>
      ) : (
        <button
          name="ru"
          className={themeLight ? styles.btnLight : styles.btnDark}
        >
          RU
        </button>
      )}
    </div>
  );
};

BtnLanguage.propTypes = {
  themeLight: PropTypes.bool.isRequired,
  i18n: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

export default withTranslation()(connect(mapStateToProps)(BtnLanguage));
