import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { API_ENDPOINT }from '../../utils/config';
import './login.css';

function Login() {

    const onClick =  async () => {
        const res = await fetch(API_ENDPOINT);
        const data = await res.json();
        const url = data.url; 
        
        location.href=url;
    }
       
 
    return (
        <div 
            className="LoginButton"
            onClick={onClick}>
        </div>
    );
}

export default Login;
