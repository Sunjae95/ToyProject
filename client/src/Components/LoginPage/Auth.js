import React from 'react';
import { Redirect } from 'react-router';
import { API_ENDPOINT } from 'Utility/config';
import { requestPOST } from 'Api/index';

function Auth() {
  const authCode = location.search.slice(6);
  const bodyData = { authCode };
  requestPOST(`${API_ENDPOINT}/login/auth`, bodyData)
    .then(res => res.json())
    .then(res => {
      localStorage.setItem('user', res.user);
    });

  return <Redirect to="/" />;
}

export default Auth;

