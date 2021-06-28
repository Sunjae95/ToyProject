import React, { useState, useEffect, useContext } from 'react';
import { API_ENDPOINT } from 'Utility/config';
import { requestPOST } from 'Api/index';
import Modal from '../Modal/Modal';
import Profile from './Profile/Profile';
import { isLoggedContext } from '../../Context';
import { LOGOUT } from '../../Context/actionType';
import axios from 'axios';

function Mypage() {
  const [profile, setProfile] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalCheck, setModalCheck] = useState(true);
  const { dispatch } = useContext(isLoggedContext);
  //MyPage 특성상 첫화면은 유저 정보가 있어야된다. 그렇기에 유저 정보를 불러온다.
  useEffect(async () => {
    try {
      //성공시 유저 정보 profile에 저장
      // const data = await requestPOST(`${API_ENDPOINT}/user`, {
      //   user: localStorage.getItem('user')
      // });
      // const user = await axios.post(`${API_ENDPOINT}/user`,{
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   auth: { user: localStorage.getItem('user') },
      //   // body: ,
      //   withCredentials: true
      // });
      const user = await axios({
        url: `${API_ENDPOINT}/user`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        auth: { user: localStorage.getItem('user') },
        withCredentials: true
      });
      // console.log();
      // const user = await data.json();
      const { id, nickname, age, gender } = user.data;
      setProfile({ id, nickname, age, gender });
    } catch (e) {
      //실패시 LOGOUT으로 타입을 바꿔줌
      setProfile(false);
      dispatch({ type: LOGOUT });
    }
  }, []);

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
    setModalCheck(true);
  };
  //모달 흰색창 제외 클릭시 사라짐
  const closeModify = e => {
    if (e.target.className === 'modal-page') {
      setModal(!modal);
    }
  };
  //클릭시 로그아웃
  const onLogout = () => {
    setProfile(false);
    setModal(!modal);
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  };
  //로그아웃 칸 누를때 모달창 띄우기
  const clickedLogout = () => {
    setModal(!modal);
    setModalCheck(false);
  };

  return (
    <>
      {modal &&
        (modalCheck ? (
          <Modal
            modalCheck={modalCheck}
            clickedModify={clickedModify}
            onSave={onSave}
            message="수정하시겠습니까?"
            closeModify={closeModify}
          />
        ) : (
          <Modal
            modalCheck={modalCheck}
            clickedModify={clickedModify}
            onSave={onLogout}
            message="로그아웃 하시겠습니까?"
            closeModify={closeModify}
          />
        ))}
      <ul className="PageButton">
        <li>프로필</li>
        {/* <Link className="Link" to="/"> */}
        <li onClick={clickedLogout}>로그아웃</li>
        {/* </Link> */}
      </ul>
      <div className="PageContent">
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
