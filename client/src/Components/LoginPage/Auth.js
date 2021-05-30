import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { API_ENDPOINT } from 'Utility/config';
import { requestPOST } from 'Api/index';
import { isLoggedContext } from '../../Context';
import { LOGIN } from '../../Context/actionType';

function Auth() {
  const {
    state: { isLogged },
    dispatch
  } = useContext(isLoggedContext);
  console.log(isLogged);

  useEffect(async () => {
    try {
      const authCode = location.search.slice(6);
      const bodyData = { authCode };
      const tmp = await requestPOST(`${API_ENDPOINT}/login/auth`, bodyData);
      const data = await tmp.json();
      //로그인 상태로 바꿔줌
      dispatch({ type: LOGIN });
      localStorage.setItem('user', data.user);
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
