import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image10 from './4/image10.png';
import './index.css';

function Slide() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return ( 
    <div className="container">
    <h2><b>WHAT OUR CLIENT SAY ABOUT US</b></h2>
    <Slider {...settings} >
      <div className="card2 text-center ">
        <img class="product-image" src={image10} alt="Product Image"/>
        <div className='rev1'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description ">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text.</p>
        <p class="price"><b>KENT</b></p>
     
      </div>
      <div className="card2 text-center ">
        <img class="product-image" src={image10} alt="Product Image"/>
        <div className='rev1'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="price"><b>KENT</b></p>
     
      </div>
      <div className="card2 text-center ">
        <img class="product-image" src={image10} alt="Product Image"/>
        <div className='rev1'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
          </div>
        <h3><b>Place Your Title Here</b></h3> 
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="price"><b>KENT</b></p>
      
      </div>
      <div className="card2 text-center ">
        <img class="product-image" src={image10} alt="Product Image"/>
        <div className='rev1'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="price"><b>KENT</b></p>
      </div>
      <div className="card2 text-center ">
        <img class="product-image" src={image10} alt="Product Image"/>
        <div className='rev1'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="price"><b>KENT</b></p>
      </div>
      <div className="card2 text-center ">
        <img class="product-image" src={image10} alt="Product Image"/>
        <div className='rev1'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="price"><b>KENT</b></p>
      </div>
    </Slider>
      </div>
    
  );
}

export default Slide;