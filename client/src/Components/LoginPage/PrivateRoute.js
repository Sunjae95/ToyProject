import React from 'react';
import { Redirect, Route } from 'react-router';
import { requestPOST } from '../../api';
import { API_ENDPOINT } from '../../utils/config';

function PrivateRoute({ component: Component, ...current }) {
  let checkUser = localStorage.getItem('user') ? true : false;

  if (checkUser) {
    requestPOST(`${API_ENDPOINT}/logincheck`, {
      user: localStorage.getItem('user')
    })
      .then(res => res.json())
      .then(res => (checkUser = res.check ? true : false));
  }

  return (
    <Route
      {...current}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
