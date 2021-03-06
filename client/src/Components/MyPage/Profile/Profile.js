import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import PropTypes from 'prop-types';
import './profile.css';

function Profile({ profile, clickedModify, onChange, checkedBox }) {
  return (
    <div className="profile">
      <div className="profile-form">
        <div className="form-group">
          <div className="form-group-text">아이디</div>
          <div className="form-group-container">{profile.id}</div>
        </div>
        <div className="form-group">
          <div className="form-group-text">닉네임</div>
          <div className="form-group-container">
            <input
              className="profile-input"
              name="nickname"
              value={profile.nickname}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-text">나이</div>
          <div className="form-group-container">
            <input
              className="profile-input"
              type="number"
              name="age"
              value={profile.age}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <Checkbox profile={profile} checkedBox={checkedBox} />
        </div>
        <button className="profile-modify button-style" onClick={clickedModify}>
          수정
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.object,
  clickedModify: PropTypes.func,
  onChange: PropTypes.func,
  checkedBox: PropTypes.func
};

export default Profile;
