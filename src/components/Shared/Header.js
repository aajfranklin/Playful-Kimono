import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <nav>
        <Link to="/">PLAYFUL KIMONO</Link>
        <Link to="/design">DESIGN A KIMONO</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header;