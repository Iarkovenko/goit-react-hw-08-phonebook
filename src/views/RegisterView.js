import { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { getTheme } from '../redux/theme/theme-selectors';
import { authOperations } from '../redux/auth';
import styles from './RegisterView.module.css';


class RegisterView extends Component {
  static propTypes = {
    themeLight: PropTypes.bool.isRequired,
    t: PropTypes.func,
    onRegister: PropTypes.func.isRequired,
  };

  state = {
    name: "",
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
    this.props.onRegister(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.container}>
        <form
          className={this.props.themeLight ? styles.form : styles.formDark}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            {this.props.t("registerFormName")}
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            {this.props.t("registerFormEmail")}
            <input
              className={styles.input}
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            {this.props.t("registerFormPassword")}
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button
            className={this.props.themeLight ? styles.btn : styles.btnDark}
            type="submit"
          >
            {this.props.t("registerFormBtn")}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        themeLight: getTheme(state),
    };
};
const mapDispatchToProps =  {
onRegister: authOperations.register
}


export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(RegisterView)
);
