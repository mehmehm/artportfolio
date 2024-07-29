import React from 'react';
import './NavBar.css';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';
import { ReactComponent as TikTokIcon } from './icons/tiktok.svg';
import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
//import { ReactComponent as Dev } from './dev.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="https://www.instagram.com/black_wings_02/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="https://www.youtube.com/@blackwings_0" target="_blank" rel="noopener noreferrer">
            <YoutubeIcon className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href= "https://www.tiktok.com/@black_wings_2" target = "_blank" rel= "noopener noreferrer">
            <TikTokIcon className = "navbar-icon" />
          </a>
        </li>
        <li className = "navbar-item">
          <a href= "https://x.com/ChristaJubal" target = "_blank" rel= "noopener noreferrer">
            <TwitterIcon className = "navbar-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;