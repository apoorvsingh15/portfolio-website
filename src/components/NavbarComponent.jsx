import React from 'react';
import '../css/App.css';

export default function NavbarComponent() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require('../assets/logo.jpg')} alt="Apoorv Singh" />
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#blogs">Blogs</a></li>
      </ul>
      <a
        className="btn-resume"
        href={require('../assets/Apoorv__Singh_-_Software_Developer.pdf')}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
      </a>
    </nav>
  );
}
