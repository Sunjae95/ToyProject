import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Components/LoginPage/LoginPage';
import Auth from './Components/LoginPage/Auth';
import Mypage from './Components/MyPage/Mypage';
import ProblemPage from './Components/ProblemPage/ProblemPage';
import RankingPage from './Components/RankPage/RankingPage';
import HomePage from './Components/HomePage/HomePage';
import './App.css';
import { isLoggedContext, Provider } from './Context';
import PrivateRoute from './Components/LoginPage/PrivateRoute';
import { requestPOST } from './api';
import { API_ENDPOINT } from './utils/config';

function App() {
  const { isLogged, dispatch } = useContext(isLoggedContext);
  console.log(isLogged);
  useEffect(() => {
    //유저 현재 유저 불러오기
    // requestPOST(`${API_ENDPOINT}/user`, {
    //   user: localStorage.getItem('user')
    // })
    //   .then(res => {
    //     console.log('성공');
    //     dispatch({ type: LOGIN });
    //   })
    //   .catch(e => {
    //     console.log('실패');
    //     dispatch({ type: LOGOUT });
    //   });
  }, []);

  return (
    <Provider>
      <div className="Main">
        <NavBar />
        <div className="MainPageContent">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/mypage" component={Mypage} />
            <PrivateRoute path="/problem" component={ProblemPage} />
            <PrivateRoute path="/rank" component={RankingPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
