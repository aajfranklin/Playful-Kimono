import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <footer>
      <nav>
        <Link to="/privacy-policy">PRIVACY POLICY</Link>
        <Link to="/site-map">SITE MAP</Link>
      </nav>
    </footer>
  )
}

export default Footer;