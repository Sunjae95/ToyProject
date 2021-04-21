import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import RankRatio from './RankRatio';
import RankSolve from './RankSolve';
function Rank() {
  return (
    <div className="MainPageContent">
      <ul className="PageButton">
        <Link to="/rank">
          <li>많이푼순서</li>
        </Link>
        <Link to="/rank/ratio">
          <li>정답비율순서</li>
        </Link>
      </ul>
      <Switch>
        <Route exact path="/rank" component={RankSolve} />
        <Route path="/rank/ratio" component={RankRatio} />
      </Switch>
    </div>
  );
}

export default Rank;
