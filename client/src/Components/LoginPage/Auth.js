import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import { API_ENDPOINT } from 'Utility/config';
import { isLoggedContext } from '../../Context';
import { LOGIN } from '../../Context/actionType';
import axios from 'axios';

function Auth() {
  const {
    state: { isLogged },
    dispatch
  } = useContext(isLoggedContext);

  useEffect(async () => {
    try {
      const authCode = location.search.slice(6);
      const bodyData = { authCode };
      const getToken = await axios.post(`${API_ENDPOINT}/login/auth`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData),
        withCredentials: true
      });

      localStorage.setItem('user', getToken.data.user);
      dispatch({ type: LOGIN });
    } catch {
      console.log('Auth: ', console.log(e));
    }
  }, []);

  if (isLogged) {
    return <Redirect to="/" />;
  } else {
    return <div>인증오류!!</div>;
  }
}

export default Auth;
