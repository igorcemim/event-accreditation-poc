import React, { Component } from 'react';
import Router from './Router';
import AppContext from './Context';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.retrieveUser(),
      handleLogout: this.handleLogout,
      handleLogin: this.handleLogin,
    }
  }

  retrieveUser = () => {
    const userStorage = localStorage.getItem('user');
    if (userStorage !== null) {
      return JSON.parse(userStorage);
    }
    return null;
  }

  handleLogin = (callback = () => {}) => {
    const user = {
      'username': 'johndoe@email.com',
    }
    const userStorage = JSON.stringify(user);
    localStorage.setItem('user', userStorage);
    this.setState({ user }, callback);
  }

  handleLogout = (callback = () => {}) => {
    localStorage.removeItem('user');
    this.setState({ user: null }, callback);
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
