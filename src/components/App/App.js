// import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
// import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getTheme } from "../../redux/theme/theme-selectors";
import AppBar from "../AppBar";
import HomeView from "../../views/HomeView";
import PhonebookView from "../../views/PhonebookView";
import LogInView from '../../views/LogInView';
import RegisterView from '../../views/RegisterView';
import NotFoundView from '../../views/NotFoundView';
import routes from "../../routes";
import styles from "./App.module.css";

// const HomeView = lazy(() =>
//   import("../../views/HomeView" /* webpackChunkName: "home-view" */)
// );
// const LoginView = lazy(() =>
//   import("../../views/LoginView" /* webpackChunkName: "login-view" */)
// );
// const PhonebookView = lazy(() =>
//   import(
//     "../../views/PhonebookView" /* webpackChunkName: "phonebook-view" */
//   )
// );
// const RegisterView = lazy(() =>
//   import(
//     "../../views/RegisterView" /* webpackChunkName: "register-view" */
//   )
// );
// const NotFoundView = lazy(() =>
//   import("../../views/NotFoundView" /* webpackChunkName: "notFound-view" */)
// );

const App = ({ themeLight }) => (
  <div className={themeLight ? styles.bodyLight : styles.bodyDark}>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route path={routes.register} component={RegisterView} />
      <Route path={routes.login} component={LogInView} />
      <Route path={routes.catalog} component={PhonebookView} />
      
      <Route component={NotFoundView} />
    </Switch>
  </div>
);

App.propTypes = {
  themeLight: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

export default connect(mapStateToProps)(App);
