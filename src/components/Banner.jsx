import React from 'react';
import './Banner.css';
import banner from './banner.jpg';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <img src={banner} alt="Banner" className="banner-image" />
        <img src={banner} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
