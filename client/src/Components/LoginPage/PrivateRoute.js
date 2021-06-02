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
  //매번실행시 유저 정보확인
  useEffect(async () => {
    console.log('fsd');
    try {
      const tmp = await requestPOST(`${API_ENDPOINT}/user`, {
        user: localStorage.getItem('user')
      });
      console.log(tmp);
      console.log('private O');
      dispatch({ type: LOGIN });
    } catch (e) {
      console.log('private X');
      dispatch({ type: LOGOUT });
    }
  }, [Component]);

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
