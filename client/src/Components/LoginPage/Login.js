import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../../utils/config';
import './login.css';
import { requestGET } from '../../api/index';

function Login() {
  const [url, setUrl] = useState(null);

  useEffect(async () => {
    const loginURL = await requestGET(`${API_ENDPOINT}/login`);
    setUrl(loginURL.url);
  }, []);

  const onClick = async () => {
    location.href = url;
  };

  return <div className="LoginButton" onClick={onClick}></div>;
}

export default Login;
