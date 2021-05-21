import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CreateProblem from './CreateProblem/CreateProblem';
import SelectProblem from './SelectProblem';
function ProblemPage() {
  return (
    <>
      <ul className="PageButton">
        <Link className="Link" to="/problem">
          <li>문제뽑기</li>
        </Link>
        <Link className="Link" to="/problem/select">
          <li>문제조회</li>
        </Link>
      </ul>
      <div className="PageContent">
        <Switch>
          <Route path="/problem/select" component={SelectProblem} />
          <Route exact path="/problem" component={CreateProblem} />
        </Switch>
      </div>
    </>
  );
}

export default ProblemPage;
