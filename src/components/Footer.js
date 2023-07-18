import React from 'react';
import GitHubLogo from '../assets/github-logo.png';
import LinkedInLogo from '../assets/linkedin-logo.png';
import StackOverflowLogo from '../assets/stackoverflow-logo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="GitHub" className="footer-logo" />
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="footer-logo" />
          LinkedIn
        </a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
          <img src={StackOverflowLogo} alt="Stack Overflow" className="footer-logo" />
          Stack Overflow
        </a>
      </div>
      <p>&copy; 2023 Your Portfolio Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
