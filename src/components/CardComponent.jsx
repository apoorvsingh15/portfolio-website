import React from 'react';

export default function CardComponent({ image, title, about, heading, languages, tools, toolName }) {
  return (
    <div className="card">
      <img className="card-icon" src={image} alt={title} />
      <p className="card-title">{title}</p>
      <p className="card-about">{about}</p>
      <p className="card-heading">{heading}</p>
      <p className="card-text">{languages}</p>
      <p className="card-heading">{tools}</p>
      <p className="card-text">{toolName}</p>
    </div>
  );
}
