import React, { useState } from 'react';
import '../css/App.css';
import logoImg from '../assets/logo.jpg';
import resumePdf from '../assets/Apoorv__Singh_-_Software_Developer.pdf';

export default function NavbarComponent(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoImg} alt="Apoorv Singh" />
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#game">Game</a></li>
          <li><a href="#stats">Stats</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            className="btn-resume"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#game" onClick={closeMenu}>Game</a>
        <a href="#stats" onClick={closeMenu}>Stats</a>
        <a href="#blogs" onClick={closeMenu}>Blogs</a>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ color: 'var(--color-accent-light)' }}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}

