import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "./Components/LoginPage/Login";
import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Components/LoginPage/Auth";
import "./App.css";
import Home from "./Components/Home";
import Mypage from "./Components/MyPage/Mypage";
import Problem from "./Components/ProblemPage/Problem";
import Rank from "./Components/RankPage/Rank";
import { useCookies } from 'react-cookie';
import PrivateRoute from "./Components/LoginPage/PrivateRoute";

function App() {
  const [cookies, setCookies] = useCookies('id');

  return (
    <div className="Main">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Login}/>
        {/* <Route path='/login' component={Auth}/> */}
        <Route path='/login' render={() => <Auth cookie={setCookies}/>}/>
        <PrivateRoute path='/home' component={Home}/>
        {/* <Route path='/home' component={Home}/> */}
        <Route path='/mypage' component={Mypage}/>
        <Route path='/problem' component={Problem}/>
        <Route path='/rank' component={Rank}/>
      </Switch>
      
      
    </div>
  );
}

export default App;

