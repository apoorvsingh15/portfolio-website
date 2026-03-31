import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import NavbarComponent from '../components/NavbarComponent';
import TypedComponent from '../components/TypedComponent';
import ImageComponent from '../components/ImageComponent';
import About from '../components/About';
import CardComponent from '../components/CardComponent';
import { SkillBar } from '../components/SkillBar';

export default function Main() {
  const [enableCounter, setEnableCounter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setEnableCounter(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarComponent />

      {/* Hero */}
      <TypedComponent />

      {/* Avatar */}
      <ImageComponent />

      {/* About */}
      <About />

      {/* Services */}
      <section className="services-section" id="services">
        <div className="section-header">
          <span className="section-tag">What I Do</span>
          <h2>Services</h2>
        </div>
        <div className="cards-grid">
          <CardComponent
            image={require('../assets/frontend-dev.svg')}
            title="Front-end Developer"
            about="Front-end developer specializing in React.js framework. I turn ideas into beautiful, interactive reality."
            heading="Languages I speak:"
            languages="HTML5, CSS3, JavaScript, React.js, React Native, Node.js, Java & C"
            tools="Dev Tools:"
            toolName="BitBucket, Bootstrap, CodePen, Github, Material-UI, VS Code, Terminal"
          />
          <CardComponent
            image={require('../assets/mobile-dev.svg')}
            title="Mobile Developer"
            about="Cross-platform mobile development for iOS & Android using React Native."
            heading="Mobile Design:"
            languages="React Native, Flexbox, Cross-platform iOS & Android"
            tools="Dev Tools:"
            toolName="Android Studio, Expo, VS Code, XCode, Trello, Slack"
          />
          <CardComponent
            image={require('../assets/blogger-dev.svg')}
            title="Blogger"
            about="A passionate blogger writing about life and JavaScript — because I find them surprisingly similar."
            heading="Platforms:"
            languages="Medium, Blogger"
            tools="Featured Blogs:"
            toolName="Destination Lost in the Journey, Hoisting in JavaScript"
          />
        </div>
      </section>

      {/* Skills */}
      <SkillBar />

      {/* Stats */}
      <section className="stats-section" id="stats">
        <div className="section-header">
          <span className="section-tag">By the Numbers</span>
          <h2>Statistics</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>Work I have accomplished</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">
              {enableCounter ? <CountUp end={25} duration={10} /> : '0'}
              <span style={{ fontSize: '2rem' }}>+</span>
            </div>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {enableCounter ? <CountUp end={35000} duration={10} /> : '0'}
              <span style={{ fontSize: '2rem' }}>+</span>
            </div>
            <p className="stat-label">Lines of Code</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {enableCounter ? <CountUp end={30000} duration={10} /> : '0'}
              <span style={{ fontSize: '2rem' }}>+</span>
            </div>
            <p className="stat-label">Cups of Coffee</p>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="blogs-section" id="blogs">
        <div className="section-header">
          <span className="section-tag">Writing</span>
          <h2>Check Out My Blogs</h2>
        </div>
        <div className="blogs-grid">
          <a
            className="blog-card"
            href="https://medium.com/@apoorv.singh15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../assets/medium-logo-lg.jpeg')} alt="Medium blog" />
          </a>
          <a
            className="blog-card"
            href="https://lifeandreact.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../assets/blogger.jpg')} alt="Blogger blog" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img
          className="footer-avatar"
          src={require('../assets/logo.jpg')}
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
