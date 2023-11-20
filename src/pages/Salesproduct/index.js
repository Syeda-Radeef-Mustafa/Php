import React from 'react';
import image12 from './10/image12.png';
import './index.css';

function Salesproduct() {
  return (
    <div className="container123">
        <div className='test3'>
       <h1><b>Products</b></h1></div>
      <div className="row">
      <div className="col-lg-3" style={{paddingLeft:"80px", paddingTop:"40px"}}>
        <div className="sort">
        <h4>Sort By</h4>
        <select style={{width:'90%', height:'40px'}}>
              <option value="category1">By Name</option>
              <option value="category2">By Date</option>
              <option value="category1">Ascending</option>
              <option value="category2">Descending</option>
        </select>
        </div>
        <div className="avail">
        <h4>Availability</h4>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">In Stock (1)</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox2" />
        <label htmlFor="checkbox2" style={{color:'grey'}}>Out of Stock (0)</label>
        </div>
        </div>
        <div className="price-slider">
        <h4>Price</h4>
        <input type="text" placeholder="0" style={{width:'30%'}}/>
        <input type="text" placeholder="250" style={{width:'30%'}}/>
        <div className="price-slide">
        <input type="range" min="0" max="100" style={{width:'90%'}}/>
        </div>
        </div>
        <div className="category">
        <h4>Category Type</h4>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-4">
         <img class="product-image" src={image12} alt="Product Image"/>
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
            <div className="col-lg-4">
            <img class="product-image" src={image12} alt="Product Image"/>
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
            <div className="col-lg-4">
            <img class="product-image" src={image12} alt="Product Image"/>
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
          </div>
          <div className="row">
            <div className="col-lg-4">
          <img class="product-image" src={image12} alt="Product Image"/>
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
            <div className="col-lg-4">
            <img class="product-image" src={image12} alt="Product Image"/>
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
            <div className="col-lg-4">
            <img class="product-image" src={image12} alt="Product Image"/>
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
          </div>
        </div>
      </div>
      </div>
  );
}

export default Salesproduct;
