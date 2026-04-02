import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import NavbarComponent from '../components/NavbarComponent';
import TypedComponent from '../components/TypedComponent';
import ImageComponent from '../components/ImageComponent';
import About from '../components/About';
import CardComponent from '../components/CardComponent';
import { SkillBar } from '../components/SkillBar';
import ParticleCanvas from '../components/ParticleCanvas';
import MiniGame from '../components/MiniGame';
import frontendDevImg from '../assets/frontend-dev.svg';
import mobileDevImg from '../assets/mobile-dev.svg';
import bloggerDevImg from '../assets/blogger-dev.svg';
import mediumLogoImg from '../assets/medium-logo-lg.jpeg';
import bloggerImg from '../assets/blogger.jpg';
import logoImg from '../assets/logo.jpg';

function getInitialTheme(): boolean {
  try {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
  } catch (_) { /* ignore */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function Main(): React.JSX.Element {
  const [enableCounter, setEnableCounter] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Apply theme to <html> element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem('darkMode', String(darkMode));
    } catch (_) { /* ignore */ }
  }, [darkMode]);

  const toggleTheme = (): void => setDarkMode(d => !d);

  // Scroll-based counter trigger
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY >= 800) {
        setEnableCounter(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cursor glow trail
  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent): void => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Global scroll-reveal IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Particle background */}
      <ParticleCanvas />

      {/* Cursor glow */}
      <div id="cursor-glow" ref={cursorRef} />

      <NavbarComponent darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Hero */}
      <TypedComponent />

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* Avatar */}
      <ImageComponent />

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* About */}
      <About />

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* Services */}
      <section className="services-section" id="services">
        <div className="section-header reveal">
          <span className="section-tag">What I Do</span>
          <h2>Services</h2>
        </div>
        <div className="cards-grid">
          <div className="reveal reveal-d1">
            <CardComponent
              image={frontendDevImg}
              title="Front-end Developer"
              about="Front-end developer specializing in React.js framework. I turn ideas into beautiful, interactive reality."
              heading="Languages I speak:"
              languages="HTML5, CSS3, JavaScript, React.js, React Native, Node.js, Java & C"
              tools="Dev Tools:"
              toolName="BitBucket, Bootstrap, CodePen, Github, Material-UI, VS Code, Terminal"
            />
          </div>
          <div className="reveal reveal-d2">
            <CardComponent
              image={mobileDevImg}
              title="Mobile Developer"
              about="Cross-platform mobile development for iOS & Android using React Native."
              heading="Mobile Design:"
              languages="React Native, Flexbox, Cross-platform iOS & Android"
              tools="Dev Tools:"
              toolName="Android Studio, Expo, VS Code, XCode, Trello, Slack"
            />
          </div>
          <div className="reveal reveal-d3">
            <CardComponent
              image={bloggerDevImg}
              title="Blogger"
              about="A passionate blogger writing about life and JavaScript — because I find them surprisingly similar."
              heading="Platforms:"
              languages="Medium, Blogger"
              tools="Featured Blogs:"
              toolName="Destination Lost in the Journey, Hoisting in JavaScript"
            />
          </div>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* Skills */}
      <SkillBar />

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* Mini Game */}
      <section className="game-section" id="game">
        <div className="game-intro reveal">
          <span className="section-tag">Interactive</span>
          <h2 className="section-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800 }}>
              A Taste of Mobile
            </span>
          </h2>
          <p>Playable in the browser — built to show off cross-platform chops.</p>
        </div>
        <div className="game-layout reveal">
          {/* iOS phone + game */}
          <MiniGame />

          {/* Description */}
          <div className="game-description">
            <span className="game-badge">📱 React Native Dev</span>
            <h3>Snake — in an iPhone</h3>
            <p>
              This fully playable Snake game runs inside a CSS-crafted iOS phone mockup,
              right in your browser. Use <strong>arrow keys</strong>, <strong>WASD</strong>,
              or the on-screen D-pad to control the snake.
            </p>
            <p>
              Building native-feeling mobile experiences is exactly what I do every day
              with React Native — from smooth animations to touch gestures and pixel-perfect
              iOS & Android UIs.
            </p>
            <p className="game-hint">
              💡 Tip: tap the <strong>▶</strong> button in the centre of the D-pad to start,
              and <strong>↺</strong> to restart after a game over.
            </p>
          </div>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* Stats */}
      <section className="stats-section" id="stats">
        <div className="section-header reveal">
          <span className="section-tag">By the Numbers</span>
          <h2>Statistics</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>Work I have accomplished</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card reveal reveal-d1">
            <div className="stat-number">
              {enableCounter ? <CountUp end={50} duration={6} separator="," /> : '0'}
              <span>+</span>
            </div>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-card reveal reveal-d2">
            <div className="stat-number">
              {enableCounter ? <CountUp end={500000} duration={8} separator="," /> : '0'}
              <span>+</span>
            </div>
            <p className="stat-label">Lines of Code</p>
          </div>
          <div className="stat-card reveal reveal-d3">
            <div className="stat-number">
              {enableCounter ? <CountUp end={30000} duration={8} separator="," /> : '0'}
              <span>+</span>
            </div>
            <p className="stat-label">Cups of Coffee</p>
          </div>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* Blogs */}
      <section className="blogs-section" id="blogs">
        <div className="section-header reveal">
          <span className="section-tag">Writing</span>
          <h2>Check Out My Blogs</h2>
        </div>
        <div className="blogs-grid">
          <a
            className="blog-card reveal reveal-d1"
            href="https://medium.com/@apoorv.singh15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mediumLogoImg} alt="Medium blog" />
          </a>
          <a
            className="blog-card reveal reveal-d2"
            href="https://lifeandreact.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bloggerImg} alt="Blogger blog" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img
          className="footer-avatar"
          src={logoImg}
          alt="Apoorv Singh"
        />
        <p className="footer-tagline">Living, learning, &amp; leveling up one day at a time.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/apoorv-singh-07943622/" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/apoorv.singh.16" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/apoorvsingh15" aria-label="GitHub">
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="https://twitter.com/apoorv_singh15" aria-label="Twitter">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
        <p className="footer-text">Handcrafted by me &copy; 2026</p>
        <p className="footer-text">
          Made with{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
        </p>
      </footer>
    </>
  );
}
