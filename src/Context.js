import React from 'react';

const AppContext = React.createContext({
  user: null,
  handleLogout: () => {},
  handleLogin: () => {},
});

export default AppContext;
