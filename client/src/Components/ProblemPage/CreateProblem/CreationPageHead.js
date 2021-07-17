import React from 'react';
import Proptypes from 'prop-types';
function CreationPageHead({ getProblems }) {
  return (
    <div className="problemPageHead">
      <button className="profile-modify button-style" onClick={getProblems}>
        뽑기 버튼
      </button>
    </div>
  );
}

CreationPageHead.Proptypes = {
  getProblems: Proptypes.func
};
export default CreationPageHead;
