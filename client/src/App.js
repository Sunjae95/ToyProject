import React from "react";
import { Route } from 'react-router-dom';
import Login from "./Components/LoginPage/Login";
import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Components/LoginPage/Auth";
import "./App.css";
import Home from "./Components/Home";
import Mypage from "./Components/MyPage/Mypage";
import Problem from "./Components/ProblemPage/Problem";
import Rank from "./Components/RankPage/Rank";


function App() {
  return (
    <div className="Main">
      <NavBar />
      <Route exact path='/' component={Login}/>
      <Route path='/login' component={Auth}/>
      <Route path='/home' component={Home}/>
      <Route path='/mypage' component={Mypage}/>
      <Route path='/problem' component={Problem}/>
      <Route path='/rank' component={Rank}/>
      
    </div>
  );
}

export default App;

// login 페이지 이후 구현
// <NavBar></NavBar>
//     <Switch>
//       {/* <Route path="/login" component={Login}/> */}
//       <Route path="/mypage" component={Mypage}/>
//       <Route path="/problem" component={Problem}/>
//       <Route path="/rank" component={Rank}/>
//       <Route path="/" component={Home} exact/>
//     </Switch>