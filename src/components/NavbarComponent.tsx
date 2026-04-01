import React from 'react';
import '../css/App.css';
import logoImg from '../assets/logo.jpg';
import resumePdf from '../assets/Apoorv__Singh_-_Software_Developer.pdf';

export default function NavbarComponent(): React.JSX.Element {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImg} alt="Apoorv Singh" />
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#blogs">Blogs</a></li>
      </ul>
      <a
        className="btn-resume"
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
      </a>
    </nav>
  );
}
