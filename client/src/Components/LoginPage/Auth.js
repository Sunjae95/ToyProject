import React from 'react'
import { API_ENDPOINT } from '../../utils/config';


function Auth() {
    const getToken = async () => {
        const authCode = location.search.slice(6);
        console.log(`${API_ENDPOINT}/auth`);
        const data = await fetch(`${API_ENDPOINT}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ authCode })
        })
        const code = await data.json();
        console.log(code);
       
      
      
      
    }
    getToken();
    return <>fdsfs</>
    
}

export default Auth;
