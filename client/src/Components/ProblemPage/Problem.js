import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CreateProblem from './CreateProblem';
import SelectProblem from './SelectProblem';
function Problem() {
  return (
    <div className="MainPageContent">
      <ul className="PageButton">
        <Link to="/problem">
          <li>문제뽑기</li>
        </Link>
        <Link to="/problem/select">
          <li>문제조회</li>
        </Link>
      </ul>
      <Switch>
        <Route path="/problem/select" component={SelectProblem} />
        <Route exact path="/problem" component={CreateProblem} />
      </Switch>
    </div>
  );
}

export default Problem;
