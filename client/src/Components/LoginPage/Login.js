import React from 'react';
import { API_ENDPOINT }from '../../utils/config';
import './login.css';
import { requestGET } from '../../api/index';

function Login() {
    const onClick = async () => {
        const loginURL = await requestGET(API_ENDPOINT);
        location.href = loginURL.url;
    }
       
 
    return (
        <div 
            className="LoginButton"
            onClick={onClick}>
        </div>
    );
}

export default Login;
