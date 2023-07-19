import React from 'react';
import GitHubLogo from '../components/images/github.png';
import LinkedInLogo from '../components/images/linkedin.png';
import StackOverflowLogo from '../components/images/Stack.png';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/jdel-18" target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="GitHub" className="footer-logo" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/josh-delves-3824a2268/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="footer-logo" />
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/21076803/j-j" target="_blank" rel="noopener noreferrer">
          <img src={StackOverflowLogo} alt="Stack Overflow" className="footer-logo" />
          Stack Overflow
        </a>
      </div>
      <p>&copy; 2023 Josh Delves. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
