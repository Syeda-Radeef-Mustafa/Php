import React from 'react';
import bg from './5/bg.jpg';
import './index.css';


function Footer() {
  const containerStyle = {
    position: 'relative',
    top: 50,
    width: '100%',
    height: '500px', // Adjust the height as needed
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',

  };

  return (
    <div className='abc' style={containerStyle}>
      <img
        src={bg}
        alt="Background"
        style={backgroundStyle}/>
      <div className="def" style={overlayStyle}></div>
      <div className="row" style={backgroundStyle}>
        <div className="col-lg-6">
          <div className="content">
            <h2><b>SIGN UP TO OUR NEWS.</b></h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>
        </div>
        <div className="col-lg-6">
        <div className="content">
          <div className="message-box1">
        <input type="text" placeholder="Your Email Here" />
        <button>Subscribe</button>
        </div>
          </div>
        </div>
        <div className="random">
        <div className="col-lg"></div>
              <ul>
              <p>Quick Links</p>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            </ul>
            <div className="col-lg"></div>
              <ul>
              <p>Quick Links</p>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            </ul>
            <div className="col-lg"></div>
              <ul>
              <p>Quick Links</p>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            </ul>
            <div className="col-lg"></div>
              <ul>
              <p>Quick Links</p>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            </ul>
            <div className="col-lg"></div>
              <ul>
              <p>Quick Links</p>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            <li><i class="fa fa-chevron-right"></i>Lorem Ipsum Dolo</li>
            </ul>
            <div className="random1">
        <div className="col-lg"></div>
        <p><i class="fa fa-facebook">
        <i class="fa fa-instagram"></i></i></p>
        <div className="col-lg"></div>
        <p>Copyright © 2023 - All Right Reserved.</p>
        <div className="col-lg"></div>
        <p><i class="fa fa-paypal"></i>
        <i class="fa fa-cc-mastercard"></i>
          <i class="fa fa-cc-visa"></i></p>
    </div>
      </div>
</div>
</div>
  );
}

export default Footer;
