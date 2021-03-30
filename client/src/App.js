import React, { useState, useEffect } from "react";
import {Link, Route, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/LoginPage/Login";
import Mypage from "./Components/MyPage/Mypage";
import Problem from "./Components/ProblemPage/Problem";
import Rank from "./Components/RankPage/Rank";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="Main">
      <NavBar></NavBar>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/mypage" component={Mypage}/>
      <Route path="/problem" component={Problem}/>
      <Route path="/rank" component={Rank}/>
      <Route path="/" component={Home} exact/>
    </Switch>
    </div>
  );
}

export default App;