import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoute({ component: Component, ...rest }) {
  const checkUser = localStorage.getItem('user') ? true : false;

  return (
    <Route
      {...rest}
      render={props =>
        checkUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
