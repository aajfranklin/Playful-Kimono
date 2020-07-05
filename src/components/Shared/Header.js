import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return(
    <header>
      <nav id="header-nav">
        <NavLink to="" id="home-link">PLAYFUL KIMONO</NavLink>
        <div id="column-links">
          <NavLink to="/design">DESIGN A KIMONO</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/about">ABOUT • CONTACT</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header;