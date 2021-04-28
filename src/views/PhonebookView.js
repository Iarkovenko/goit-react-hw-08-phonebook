import { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  phonebookOperations,
  phonebookSelectors,
} from "../redux/phonebook/";
import { getTheme } from "../redux/theme/theme-selectors";
import ContactForm from "../components/Form";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import styles from "./PhonebookView.module.css";

class PhonebookView extends Component {
  async componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { themeLight, t } = this.props;
    return (
      <>
        <div className={styles.box}>
          <h1 className={themeLight ? styles.titleLight : styles.titleDark}>
            {t("title")}
          </h1>
        </div>
        <ContactForm />
        <h2 className={themeLight ? styles.titleLight : styles.titleDark}>
          {t("subtitle")}
        </h2>
        <Filter />
        {this.props.isLoadingContacts && (
          <h2 className={themeLight ? styles.titleLight : styles.titleDark}>
            {t("loading")}
          </h2>
        )}
        <ContactList />
      </>
    );
  }
}

PhonebookView.propTypes = {
  themeLight: PropTypes.bool.isRequired,
  isLoadingContacts: PropTypes.bool.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  t: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
    isLoadingContacts: phonebookSelectors.getLoading(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
  };
};
export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PhonebookView)
);
