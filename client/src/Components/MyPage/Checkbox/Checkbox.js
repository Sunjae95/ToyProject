import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
function Checkbox({ profile, checkedBox }) {
  return (
    <>
      <div className="form-group-text">성별</div>
      <div className="form-group-container">
        <div className="checkbox-item" onClick={checkedBox}>
          {profile.gender ? (
            <BiCheckCircle size="20px" />
          ) : (
            <BiCheckCircle size="20px" color="#81BEF7" />
          )}
          <div>남자</div>
        </div>
        <div className="checkbox-item" onClick={checkedBox}>
          {!profile.gender ? (
            <BiCheckCircle size="20px" />
          ) : (
            <BiCheckCircle size="20px" color="#81BEF7" />
          )}
          <div>여자</div>
        </div>
      </div>
    </>
  );
}

export default Checkbox;
