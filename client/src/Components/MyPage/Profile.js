import React from 'react';

function Profile({ profile, onSave, onChange }) {
  return (
    <div className="PageContent">
      <div>아이디: {profile.id}</div>
      <div>
        닉네임:
        <input name="nickname" value={profile.nickname} onChange={onChange} />
      </div>

      <button onClick={onSave}>저장</button>
    </div>
  );
}

export default Profile;
