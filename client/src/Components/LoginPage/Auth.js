import React, {useState} from 'react'
import { API_ENDPOINT } from '../../utils/config';
import { requestGET, requestPOST } from '../../api/index';


function Auth(props) {
    const getToken = async () => {
        const authCode = location.search.slice(6);
        const bodyData = {authCode};
        
        const data = await requestPOST(`${API_ENDPOINT}/auth`, bodyData);
        const user = await data.json();
        
        props.cookie('id', user);   //클로저 쿠키저장
    }
    getToken();
    

    const check = () => {
        const a = {token};
        console.log(a);
        POST(`${API_ENDPOINT}/auth/check`, a);
    }
    return <>
    <button onClick={check}>fdas</button>
    </>
    
}

export default Auth;
