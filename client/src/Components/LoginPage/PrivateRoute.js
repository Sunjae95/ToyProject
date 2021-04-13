import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { requestGET } from '../../api';
import { API_ENDPOINT } from '../../utils/config';

function PrivateRoute({ component: Component, ...current }) {
  //localstorage로
  // true false 로
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getResponse = async () => {
    const { check } = document.cookie
      ? await requestGET(`${API_ENDPOINT}/logincheck`, {
          credentials: 'include'
        })
      : 'no';

    setIsLoggedIn(check === 'yes');
  };

  useEffect(getResponse, []);

  return (
    <Route
      {...current}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to="/login
        "
          />
        )
      }
    />
  );
}

export default PrivateRoute;
