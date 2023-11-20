import React, {useRef} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image6 from './img/image6.png';
import './index.css';

function Product() {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const sliderRef = useRef(null);

  const Previous = () => {
      sliderRef.current.slickPrev();
  };

  const Next = () => {
      sliderRef.current.slickNext();
  };

  return ( 
    <div className="container">
    <h1>Featured Products</h1>
      <div className="navigation">
      <button class="slider-button prev-button" onClick={Previous}>
      <i class="fa fa-chevron-left"></i>
    </button>
    <button class="slider-button next-button" onClick={Next}>
      <i class="fa fa-chevron-right"></i>
    </button>
        </div>
    <Slider {...settings} ref={sliderRef}>
      <div className="card1 ">
        <img class="product-image" src={image6} alt="Product Image"/>
        <div className='rev'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <span>
          Reviews (10)
        </span>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-descriptiont ">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text.</p>
        <p class="product-price">$19.99</p>
        <p>
          In Stock  <i className="fa fa-check"></i>
        </p>
      </div>
      <div className="card1 ">
        <img class="product-image" src={image6} alt="Product Image"/>
        <div className='rev'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <span>
          Reviews (10)
        </span>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="product-price">$19.99</p>
        <p>
          In Stock  <i className="fa fa-check"></i>
        </p>
      </div>
      <div className="card1 ">
        <img class="product-image" src={image6} alt="Product Image"/>
        <div className='rev'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <span>
          Reviews (10)
        </span>
          </div>
        <h3><b>Place Your Title Here</b></h3> 
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="product-price">$19.99</p>
        <p>
          In Stock  <i className="fa fa-check"></i>
        </p>
      </div>
      <div className="card1 ">
        <img class="product-image" src={image6} alt="Product Image"/>
        <div className='rev'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <span>
          Reviews (10)
        </span>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="product-price">$19.99</p>
        <p>
          In Stock  <i className="fa fa-check"></i>
        </p>
      </div>
      <div className="card1 ">
        <img class="product-image" src={image6} alt="Product Image"/>
        <div className='rev'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <span>
          Reviews (10)
        </span>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text. </p>
        <p class="product-price">$19.99</p>
        <p>
          In Stock  <i className="fa fa-check"></i>
        </p>
      </div>
      <div className="card1 ">
        <img class="product-image" src={image6} alt="Product Image"/>
        <div className='rev'>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <span>
          Reviews (10)
        </span>
          </div>
        <h3><b>Place Your Title Here</b></h3>
        <p class="product-description">Lorem ipsum, placeholder or dummy text used in typesetting
          It features scrambled Latin text.</p>
        <p class="product-price">$19.99</p>
        <p>
          In Stock  <i className="fa fa-check"></i>
        </p>
      </div>
    </Slider>
      </div>
    
  );
}

export default Product;