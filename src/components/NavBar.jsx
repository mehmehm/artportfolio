import React from 'react';
import './NavBar.css';
import instagram from './instagram.svg'
import youtube from './youtube.svg'
import tiktok from './tiktok.svg'
import twitter from './twitter.svg'
import deviantart from './deviantart.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src = {instagram} alt="Home" className="navbar-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;