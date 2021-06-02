import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from 'Utility/config';
import axios from 'axios';
import './login.css';

function LoginPage() {
  const [url, setURL] = useState(null);

  useEffect(async () => {
    // const loginURL = await requestGET(`${API_ENDPOINT}/login`);
    // console.log(loginURL)
    try {
      const getURL = await axios.get(`${API_ENDPOINT}/login`);
      setURL(getURL.data.url);
    } catch (e) {
      console.log('로그인페이지 오류: ', e);
    }
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

export default LoginPage;
