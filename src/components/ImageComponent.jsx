import React from 'react';

export default function ImageComponent() {
  return (
    <div className="avatar-section">
      <div className="avatar-ring">
        <img
          className="avatar-img"
          src={require('../assets/avatar.png')}
          alt="Apoorv Singh"
        />
      </div>
    </div>
  );
}
