import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return(
    <footer>
      <nav id="footer-nav">
        <NavLink to="/privacy-policy">PRIVACY POLICY</NavLink>
        <NavLink to="/site-map">SITE MAP</NavLink>
      </nav>
    </footer>
  )
}

export default Footer;