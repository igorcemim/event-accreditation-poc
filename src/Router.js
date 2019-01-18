import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Screens/Home';
import NotFound from './Screens/NotFound';
import Dashboard from './Components/Dashboard';
import Login from './Screens/Login';

const layoutDashboard = (WrappedComponent) => {
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

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={layoutDashboard(Home)} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
