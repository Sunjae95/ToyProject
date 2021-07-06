import React, { useReducer } from 'react';
import { LOGIN, LOGOUT } from './actionType';

const initailState = { isLogged: false };

const isLoggedContext = React.createContext(initailState);

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { isLogged: true };
    case LOGOUT:
      return { isLogged: false };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [isLogged, dispatch] = useReducer(reducer, initailState);
  const value = { isLogged, dispatch };
  return (
    <isLoggedContext.Provider value={value}>
      {children}
    </isLoggedContext.Provider>
  );
};

export { isLoggedContext, Provider };
