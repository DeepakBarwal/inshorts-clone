import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{' '}
        <a
          href="https://www.linkedin.com/in/deepak-barwal-67283215a/"
          target="_blank"
          rel="noreferrer"
        >
          Deepak Barwal
        </a>
      </span>

      <hr style={{ width: '90%' }} />

      <div className="iconContainer">
        <a
          href="https://twitter.com/IamBarwal"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-barwal-67283215a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="TBD" target="_blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
