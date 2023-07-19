import React from 'react';

export default function Resume() {
  const resumeStyles = {
    color: '#333',
  };

  const sectionStyles = {
    marginBottom: '2rem',
  };

  const headingStyles = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const subheadingStyles = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  };

  const textStyles = {
    marginBottom: '1rem',
  };

  const listStyles = {
    marginBottom: '1rem',
  };

  const listItemStyles = {
    marginBottom: '0.5rem',
  };

  const linkStyles = {
    color: '#333',
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: '#f2f2f2',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const handleLinkHover = (event) => {
    event.target.style.backgroundColor = '#ccc';
  };

  const handleLinkLeave = (event) => {
    event.target.style.backgroundColor = '#f2f2f2';
  };

  return (
    <div style={resumeStyles}>
      <h1 style={headingStyles}>Resume</h1>

      <section style={sectionStyles}>
        <h2 style={subheadingStyles}>Education</h2>
        <h3>Rice University, full stack development boot camp</h3>
        <p style={textStyles}>2023 - 2023</p>
      </section>

      <section style={sectionStyles}>
        <h2 style={subheadingStyles}>Skills</h2>
        <ul style={listStyles}>
          <li style={listItemStyles}>HTML</li>
          <li style={listItemStyles}>CSS</li>
          <li style={listItemStyles}>Javascript</li>
          <li style={listItemStyles}>Node.js</li>
          <li style={listItemStyles}>Express.js</li>
          <li style={listItemStyles}>React.js</li>
          <li style={listItemStyles}>MySQL</li>
          <li style={listItemStyles}>MongoDB</li>
          <li style={listItemStyles}>Git</li>
        </ul>
      </section>

      <a
        href="src/PDF/Resume.pdf"
        download
        style={linkStyles}
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}
      >
        Download Resume
      </a>
    </div>
  );
}
