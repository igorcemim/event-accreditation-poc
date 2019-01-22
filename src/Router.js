import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Home from './Screens/Home';
import NotFound from './Screens/NotFound';
import Login from './Screens/Login';
import Accreditation from './Screens/Accreditation';
import AppContext from './Context';

const dashboardLayout = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Dashboard>
          <WrappedComponent />
        </Dashboard>
      );
    }
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        <AppContext.Consumer>
        {context => (
          context.user !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        )}
        </AppContext.Consumer>
      }
    />
  );
}

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={dashboardLayout(Home)} />
        <PrivateRoute exact path="/credenciamento" component={dashboardLayout(Accreditation)} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
