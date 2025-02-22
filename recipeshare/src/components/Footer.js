import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links mb-3">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-pinterest"></i></a>
          <a href="#"><i className="bi bi-youtube"></i></a>
        </div>
        <p>&copy; 2025 FlavorShare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;