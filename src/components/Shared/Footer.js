import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return(
    <footer>
      <nav id="footer-nav">
        <NavLink to="/privacy-policy">PRIVACY POLICY</NavLink>
        <NavLink to="/terms">TERMS AND CONDITIONS</NavLink>
      </nav>
      <span>© EUPHEMIA FRANKLIN 2020</span>
    </footer>
  )
}

export default Footer;