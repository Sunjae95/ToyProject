import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { API_ENDPOINT } from 'Utility/config';
import { requestPOST } from 'Api/index';

function Auth() {
  const [sucess, setSucess] = useState(false);
  useEffect(async () => {
    try {
      const authCode = location.search.slice(6);
      const bodyData = { authCode };
      const tmp = await requestPOST(`${API_ENDPOINT}/login/auth`, bodyData);
      const data = await tmp.json();
      setSucess(true);
      localStorage.setItem('user', data.user);
    } catch {
      console.log('Auth: ', console.log(e));
    }
  }, []);
  if (sucess) {
    return <Redirect to="/" />;
  } else {
    return <div>인증오류!!</div>;
  }
}

export default Auth;
