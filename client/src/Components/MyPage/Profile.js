import React from 'react';

function Profile({ profile, onSave, onChange }) {
  return (
    <div className="PageContent">
      <div>아이디: {profile.id}</div>
      <input name="id" value={profile.id} onChange={onChange} />
      <div>닉네임: {profile.nickname}</div>
      <input name="nickname" value={profile.nickname} onChange={onChange} />

      <button onClick={onSave}>저장</button>
    </div>
  );
}

export default Profile;
