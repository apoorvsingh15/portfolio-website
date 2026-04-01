import React from 'react';
import Typed from 'react-typed';

export default function TypedComponent(): React.JSX.Element {
  return (
    <section className="hero-section">
      <p className="hero-eyebrow">👋 Welcome to my portfolio</p>
      <div className="typed-wrapper">
        <Typed
          strings={[
            "Hello! I'm Apoorv Singh",
            'Front-end Web Developer',
            'Specializing in React.js',
            'React Native Developer',
            'Mobile Dev – iOS & Android',
          ]}
          loop
          typeSpeed={30}
          backSpeed={40}
        />
      </div>
      <p className="hero-subtitle">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <div className="hero-cta">
        <a className="btn-primary" href="#services">See My Work</a>
        <a className="btn-outline" href="#about">About Me</a>
      </div>
    </section>
  );
}
