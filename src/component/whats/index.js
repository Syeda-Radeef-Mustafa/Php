import React from 'react';
import image9 from './123/image9.png';
import './index.css';

const Whats = () => {
  return (
    <div className="whats-us">
      <div className="whats-text">
        <h2>WHAT’S NEW</h2>
        <div className="whats-text6">
        <h1><b>PLACE YOUR TITLE HERE</b></h1>
        </div>
      <button className="shop-now-button">
              Shop Now <i className="fa fa-arrow-right"></i>
            </button>
            </div>
            <div className="whats-image">
        <img src={image9} alt="About Us" />
      </div>
    </div>
  );
};

export default Whats;