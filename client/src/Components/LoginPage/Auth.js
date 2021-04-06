import React from 'react'
import { API_KYE, REDIRECT_URL,KAKAO_URL} from '../../utils/config';


function Auth() {
    const getToken = () => {
        const code = location.search.slice(6);
        
        const bodyData = {
            grant_type: 'authorization_code',
            client_id: API_KYE,
            redirect_uri: REDIRECT_URL,
            code
         };
      
         const queryStringBody = Object.keys(bodyData)
                    .map(k=> encodeURIComponent(k)+"="+encodeURI(bodyData[k]))
                    .join("&");
      
         const requestOptions = {
            method: 'POST',
            headers:{
               'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: queryStringBody
        };
      
         fetch(KAKAO_URL, requestOptions)
         .then(data => data.json())
         .then(response=> console.log(response));
    

    }
    
    getToken();

    return <>fdsfs</>
    
}

export default Auth
