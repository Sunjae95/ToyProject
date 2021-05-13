import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestPOST } from '../../api/index';
import Profile from './Profile/Profile';
import { API_ENDPOINT } from '../../utils/config';
import Modal from '../Modal/Modal';

function Mypage() {
  const [profile, setProfile] = useState(false);
  const [modal, setModal] = useState(false);

  //유저 데이터 불러오기
  useEffect(async () => {
    try {
      //성공시 유저 정보 profile에 저장
      const data = await requestPOST(`${API_ENDPOINT}/user`, {
        user: localStorage.getItem('user')
      });
      const user = await data.json();
      const { id, nickname, age, gender } = user;

      setProfile({ id, nickname, age, gender });
    } catch (e) {
      //다시 로그인페이지 보여주기 (미구현)
      setProfile(false);
    }
  }, []);

  const onLogout = () => {
    setProfile(false);
    localStorage.removeItem('user');
  };
  //수정될때 상태 바꿔주기
  //닉네임, 나이에 따라 변형
  const onChange = e => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.name === 'age' ? parseInt(e.target.value) : e.target.value
    });
  };
  //성별체크하기
  const checkedBox = () => {
    setProfile({ ...profile, gender: !profile.gender });
  };

  //데이터 수정하기
  const onSave = () => {
    requestPOST('http://localhost:5000/api/user/modify', {
      id: profile.id,
      nickname: profile.nickname,
      age: profile.age,
      gender: profile.gender
    }).catch(e => console.log(e));
    setModal(!modal);
  };
  //모달창 열고 닫기
  const clickedModify = () => {
    setModal(!modal);
  };

  return (
    <>
      <ul className="PageButton">
        <li>프로필</li>
        <Link className="Link" to="/">
          <li onClick={onLogout}>로그아웃</li>
        </Link>
      </ul>
      <div className="PageContent">
        {modal && <Modal clickedModify={clickedModify} onSave={onSave} />}
        {profile ? (
          <Profile
            profile={profile}
            clickedModify={clickedModify}
            onChange={onChange}
            checkedBox={checkedBox}
          ></Profile>
        ) : (
          <div>불러오는중</div>
        )}
      </div>
    </>
  );
}

export default Mypage;
