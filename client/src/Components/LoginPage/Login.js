import React from 'react'
import './login.css';
function Login() {

    const onClick = () => {
        console.log('click');
    }
    return (
        <div onClick={onClick}>
           로그인페이지
        </div>
    );
}

export default Login;
