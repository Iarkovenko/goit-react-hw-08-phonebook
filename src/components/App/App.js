import { Suspense, lazy } from "react";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTheme } from "../../redux/theme/theme-selectors";
import AppBar from "../AppBar";
import PrivateRoute from '../PrivateRoute';
import PublicRoute from "../PublicRoute";
import { authOperations } from "../../redux/auth";
import routes from "../../routes";
import styles from "./App.module.css";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-view" */)
);
const LogInView = lazy(() =>
  import("../../views/LogInView" /* webpackChunkName: "login-view" */)
);
const PhonebookView = lazy(() =>
  import(
    "../../views/PhonebookView" /* webpackChunkName: "phonebook-view" */
  )
);
const RegisterView = lazy(() =>
  import(
    "../../views/RegisterView" /* webpackChunkName: "register-view" */
  )
);
const NotFoundView = lazy(() =>
  import("../../views/NotFoundView" /* webpackChunkName: "notFound-view" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    const { themeLight } = this.props;
    return (
      <div className={themeLight ? styles.bodyLight : styles.bodyDark}>
        <AppBar />
        <Suspense
          fallback={
            <Loader type="Hearts" color="gray" height={80} width={80} />
          }
        >
          <Switch>
            <PublicRoute
              path={routes.register}
              component={RegisterView}
              restricted
              redirectTo={routes.phonebook}
            />
            <PublicRoute
              path={routes.login}
              component={LogInView}
              restricted
              redirectTo={routes.phonebook}
            />
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PrivateRoute
              path={routes.phonebook}
              component={PhonebookView}
              redirectTo="/login"
            />

            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

App.propTypes = {
  themeLight: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    themeLight: getTheme(state),
  };
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
