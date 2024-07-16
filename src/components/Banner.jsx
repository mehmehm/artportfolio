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
      <div className="banner-text">
        <div className = "text-box">
            <h1>BLACK WINGS</h1> 
        </div>
        <br></br>
        <h3>welcome to my art page!</h3>
        <h3>grab some boba and enjoy :)</h3>
        
      </div>
    </div>
  );
};

export default Banner;
