import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import { API_ENDPOINT } from 'Utility/config';
import axios from 'axios';
import { isLoggedContext } from '../../Context';
import { LOGIN } from '../../Context/actionType';

function Auth() {
  //context API 도입중... 여기서부터 시작
  const { isLogged, dispatch } = useContext(isLoggedContext);

  useEffect(async () => {
    const authCode = { authCode: location.search.slice(6) };
    const url = `${API_ENDPOINT}/login/auth`;
    const data = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authCode),
      withCredentials: true
    };
    const getToken = await axios.post(url, data);

    localStorage.setItem('user', getToken.data.user);
    dispatch({ type: LOGIN });
  }, []);

  if (isLogged) return <Redirect to="/" />;
  return <div>로그인중..</div>;
}

export default Auth;
