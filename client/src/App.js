import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import NavBar from './Components/NavBar/NavBar';
import Auth from './Components/LoginPage/Auth';
import './App.css';
import Home from './Components/Home';
import Mypage from './Components/MyPage/Mypage';
import Problem from './Components/ProblemPage/Problem';
import Rank from './Components/RankPage/Rank';
import PrivateRoute from './Components/LoginPage/PrivateRoute';
import { render } from 'react-dom';

function App() {
  const [isLogged, setisLogged] = useState(false);

  return (
    <div className="Main">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/mypage" component={Mypage} />
        <PrivateRoute path="/problem" component={Problem} />
        <PrivateRoute path="/rank" component={Rank} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
