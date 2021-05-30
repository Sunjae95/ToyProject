import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { isLoggedContext } from '../../Context';

function PrivateRoute({ component: Component, ...rest }) {
  const checkUser = localStorage.getItem('user') ? true : false;
  const {
    state: { isLogged }
  } = useContext(isLoggedContext);
  console.log(isLogged);

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
