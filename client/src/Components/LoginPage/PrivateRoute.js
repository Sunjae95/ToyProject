import React from 'react'
import { Redirect, Route } from 'react-router'

function PrivateRoute({component: Component, ...current }) {
    let cookieName;
    if(document.cookie){
       cookieName = document.cookie.split('; ').find(row => row.startsWith('id')).split('=')[0];
    } else {
        cookieName = '';
    }

    return (
        <Route {...current}
            render = { props => cookieName === 'id' 
                ? <Component {...props} />
                : <Redirect to='/login' />
            }
        />   
    )
}

export default PrivateRoute
