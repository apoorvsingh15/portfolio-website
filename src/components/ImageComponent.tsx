import React from 'react';
import avatarImg from '../assets/avatar.png';

export default function ImageComponent(): React.JSX.Element {
  return (
    <div className="avatar-section">
      <div className="avatar-ring">
        <img
          className="avatar-img"
          src={avatarImg}
          alt="Apoorv Singh"
        />
      </div>
    </div>
  );
}
