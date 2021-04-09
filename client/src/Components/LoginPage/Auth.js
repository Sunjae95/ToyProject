import React from 'react'
import { API_ENDPOINT } from '../../utils/config';
import { requestPOST } from '../../api/index';

function Auth() {
    const getToken = async () => {
        const authCode = location.search.slice(6);
        const bodyData = {authCode};
        
        const data = await requestPOST(`${API_ENDPOINT}/auth`, bodyData);
        // const data = await fetch(`${API_ENDPOINT}/auth`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ authCode })
        // })
        const user = await data.json();
        console.log(user);
        return user;
    }
    getToken();
    
    return <></>
    
}

export default Auth;
