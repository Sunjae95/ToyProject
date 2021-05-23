import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from 'Utility/config';
import './login.css';
import { requestGET } from 'Api/index';

function Login() {
  const [url, setUrl] = useState(null);

  useEffect(async () => {
    const loginURL = await requestGET(`${API_ENDPOINT}/login`);
    setUrl(loginURL.url);
  }, []);

  const onClick = async () => {
    location.href = url;
  };

  return (
    <div className="LoginContent">
      <h1>서비스를 이용하려면 로그인이 필요합니다.</h1>
      <div className="LoginButton" onClick={onClick}></div>
    </div>
  );
}

export default Login;
