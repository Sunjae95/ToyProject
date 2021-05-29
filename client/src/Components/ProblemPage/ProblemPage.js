import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SelectionPage from './SelectionPage';
import CreationPage from './CreateProblem/CreationPage';

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
          <Route path="/problem/select" component={SelectionPage} />
          <Route exact path="/problem" component={CreationPage} />
        </Switch>
      </div>
    </>
  );
}

export default ProblemPage;
