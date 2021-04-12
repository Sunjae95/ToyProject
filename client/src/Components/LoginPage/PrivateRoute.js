import React from 'react'
import { Redirect, Route } from 'react-router'
import { requestGET, requestPOST } from '../../api';
import { API_ENDPOINT } from '../../utils/config';

function PrivateRoute({component: Component, ...current }) {
    
    console.log(document.cookie.split('; ').find(row => row.startsWith('id')).split('=')[1]);
    fetch(`${API_ENDPOINT}/callback`,{
        credentials: 'same-origin'
    });
    
    return (
        <Route {...current}
            render = { props => document.cookie === 'id' 
                ? <Component {...props} />
                : <Redirect to='/' />
            }
        />   
    )
}

export default PrivateRoute
