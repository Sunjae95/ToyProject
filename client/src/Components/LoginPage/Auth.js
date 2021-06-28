import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { API_ENDPOINT } from 'Utility/config';
import axios from 'axios';

function Auth() {
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
    } catch {
      console.log('Auth: ', console.log(e));
    }
  }, []);
  return <div>auth</div>;
  // return <Redirect to="/" />;
}

export default Auth;
