import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestPOST } from '../../api/index';
import './Mypage.css';
import Profile from './Profile';

function Mypage() {
  const [profile, setProfile] = useState({
    id: '',
    nickname: ''
  });
  //데이터 불러오기

  //데이터 수정하기

  //수정될때 상태 바꿔주기
  useEffect(async () => {
    const data = await requestPOST('http://localhost:5000/api/user', {
      user: localStorage.getItem('user')
    });
    const user = await data.json();
    const { id, nickname } = user;

    setProfile({ id, nickname });
  }, []);

  const onLogout = () => {
    localStorage.removeItem('user');
  };

  const onSave = () => {
    console.log('저장');
  };

  const onChange = e => {
    //여기서 시작
    // const [name, value] = e.target;
    // setProfile({
    //   ...profile,
    //   [name]: value
    // });
  };

  return (
    <div className="MainPageContent">
      <ul className="PageButton">
        <li>프로필</li>
        <Link to="/">
          <li onClick={onLogout}>로그아웃</li>
        </Link>
      </ul>
      <Profile profile={profile} onSave={onSave} onChange={onChange}></Profile>
    </div>
  );
}

export default Mypage;
