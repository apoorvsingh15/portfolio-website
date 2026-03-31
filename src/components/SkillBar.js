import React, { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'React.js', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML5 & CSS3', level: 88 },
  { name: 'React Native', level: 78 },
  { name: 'Node.js', level: 65 },
  { name: 'Java', level: 55 },
];

export function SkillBar() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {SKILLS.map(({ name, level }) => (
          <div className="skill-item" key={name}>
            <div className="skill-label">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="skill-bar-track">
              <div
                className={`skill-bar-fill${animated ? ' animated' : ''}`}
                style={{ width: animated ? `${level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
