import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import RankSolvePage from './RankSolvePage';
import RankRatioPage from './RankRatio';

function RankingPage() {
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
          <Route exact path="/rank" component={RankSolvePage} />
          <Route path="/rank/ratio" component={RankRatioPage} />
        </Switch>
      </div>
    </>
  );
}

export default RankingPage;
