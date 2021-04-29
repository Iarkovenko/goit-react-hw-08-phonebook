import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { getTheme } from "../redux/theme/theme-selectors";
import styles from "./HomeView.module.css";

const HomeView = ({ t, themeLight }) => {
  return (
    <div className={styles.container}>
      <h2 className={themeLight ? styles.titleLight : styles.titleDark}>
        {t("title")}
      </h2>
          <p className={themeLight ? styles.descriptionLight : styles.descriptionDark}>{t("description")}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};
export default withTranslation()(connect(mapStateToProps)(HomeView));
