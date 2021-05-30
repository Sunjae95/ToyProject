import React, { useContext, useEffect } from 'react';
import { requestPOST } from '../../api/index';
import { API_ENDPOINT } from '../../utils/config';
import { Redirect, Route } from 'react-router';
import { isLoggedContext } from '../../Context';
import { LOGIN, LOGOUT } from '../../Context/actionType';

function PrivateRoute({ component: Component, ...rest }) {
  //Context API isLogged: 로그인상태 / dispatch: 로그인 상태바꿔주는 함수
  const {
    state: { isLogged },
    dispatch
  } = useContext(isLoggedContext);

  useEffect(async () => {
    //유저 현재 유저 불러오기
    requestPOST(`${API_ENDPOINT}/user`, {
      user: localStorage.getItem('user')
    })
      //성공하면 LOGIN
      .then(res => {
        dispatch({ type: LOGIN });
      })
      //실패하면 LOGOUT
      .catch(e => {
        dispatch({ type: LOGOUT });
      });
  }, []);

  //로그인 유무에 따른 조건부 렌더링
  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
