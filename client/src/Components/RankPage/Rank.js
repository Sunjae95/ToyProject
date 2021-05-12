import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import RankRatio from './RankRatio';
import RankSolve from './RankSolve';
function Rank() {
  return (
    <>
      <ul className="PageButton">
        <Link className="Link" to="/rank">
          <li>많이푼순서</li>
        </Link>
        <Link className="Link" to="/rank/ratio">
          <li>정답비율순서</li>
        </Link>
      </ul>
      <div className="PageContent">
        <Switch>
          <Route exact path="/rank" component={RankSolve} />
          <Route path="/rank/ratio" component={RankRatio} />
        </Switch>
      </div>
    </>
  );
}

export default Rank;
