import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const PubliceRoute = ({
  component: Component,
    isAuthenticated,
  redirectTo,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ?  <Redirect to={redirectTo}/> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PubliceRoute);
