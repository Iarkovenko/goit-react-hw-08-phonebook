import { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { getTheme } from '../redux/theme/theme-selectors';
import { authOperations, authSelectors } from '../redux/auth';
import styles from './RegisterView.module.css';


class LogInView extends Component {
  static propTypes = {
    themeLight: PropTypes.bool.isRequired,
    t: PropTypes.func,
    onLogin: PropTypes.func.isRequired,
    loginFailed: PropTypes.string
  };

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.container}>
        <form
          className={this.props.themeLight ? styles.form : styles.formDark}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            {this.props.t("loginFormEmail")}
            <input
              className={styles.input}
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            {this.props.t("loginFormPassword")}
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          {this.props.loginFailed && (
            <p className={styles.error}>{this.props.loginFailed}</p>
          )}
          <button
            className={this.props.themeLight ? styles.btn : styles.btnDark}
            type="submit"
          >
            {this.props.t("loginFormBtn")}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      themeLight: getTheme(state),
      loginFailed: authSelectors.getErrorMessage(state)
    };
};
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};


export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LogInView)
);
