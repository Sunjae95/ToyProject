import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
    return (
        <div className="NavBarContainer">
            <ul className="NavBarMenu">
                <li><Link className="link" to="/login">로그인</Link></li>
                <li><Link className="link" to="/">홈</Link></li>
                <li><Link className="link" to="/mypage">마이페이지</Link></li>
                <li><Link className="link" to="/problem">문제</Link></li>
                <li><Link className="link" to="/rank">랭킹</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
