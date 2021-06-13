import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from 'Utility/config';
import axios from 'axios';
import './login.css';

function LoginPage() {
  const [url, setURL] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/login`)
      .then(res => res.data.url)
      .then(url => setURL(url))
      .catch(e => setURL('fail'));
  }, []);

  const onClick = async () => {
    location.href = url;
  };
  console.log(url);
  if (url == null) return <div>로딩중..</div>;
  if (url === 'fail') return <div>오류!!</div>;
  return (
    <div className="LoginContent">
      <h1>서비스를 이용하려면 로그인이 필요합니다.</h1>
      <div className="LoginButton" onClick={onClick}></div>
    </div>
  );
}

export default LoginPage;
