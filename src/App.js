import React, { Component } from 'react';
import Router from './Router';
import AppContext from './Context';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      handleLogout: this.handleLogout,
      handleLogin: this.handleLogin,
    }
  }

  handleLogin = () => {
    console.log(this.state);
    this.setState({ user: 'john@doe.com' });
  }

  handleLogout = () => {
    console.log(this.state);
    this.setState({ user: null });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router />
      </AppContext.Provider>
    );
  }
}

export default App;
