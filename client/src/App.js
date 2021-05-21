import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import NavBar from './Components/NavBar/NavBar';
import Auth from './Components/LoginPage/Auth';
import './App.css';
import Home from './Components/HomePage/Home';
import Mypage from './Components/MyPage/Mypage';
import Rank from './Components/RankPage/Rank';
import PrivateRoute from './Components/LoginPage/PrivateRoute';
import ProblemPage from './Components/ProblemPage/ProblemPage';

function App() {
  return (
    <div className="Main">
      <NavBar />
      <div className="MainPageContent">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/mypage" component={Mypage} />
          <PrivateRoute path="/problem" component={ProblemPage} />
          <PrivateRoute path="/rank" component={Rank} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
