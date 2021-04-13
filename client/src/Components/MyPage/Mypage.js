import React from "react";
import { Route } from "react-router";
import "./Mypage.css";
import Profile from "./Profile";

function Mypage() {
  return (
    <div className="MainPageContent">
      <ul className="PageButton">
        <li>프로필</li>
        <li>로그아웃</li>
      </ul>
      <Profile></Profile>
    </div>
  );
}

export default Mypage;
