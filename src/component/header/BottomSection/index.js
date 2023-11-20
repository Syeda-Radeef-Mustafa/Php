import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.css'

function BottomSection() {
  return (
    <div className="bottom-section">
    <div className="left-buttons">
    <div class="dropdown">
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
          Shop By Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Tape Backup Drives</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Tape Accesories</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <a href='/' className='button'>
        Home
      </a>
      <a href='/about' className='button'>
        About Us
      </a>
      <a href='/contact' className='button'>
        Contact US
      </a>
      <a href='/repair' className='button'>
        Repair Service
      </a>
      <a href='/testinomial' className='button'>
        Testinomial
      </a>
      <a href='/salesproduct' className='button'>
      Products
      </a>
    </div>
    <button className="button right-button">Order a Product <i class="fa fa-arrow-right"></i></button>
  </div>
  );
}

export default BottomSection;