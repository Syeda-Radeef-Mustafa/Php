import React from "react";
import Slider from '../../component/slider';
import Divs from '../../component/divs';
import Product from '../../component/product';
import About from '../../component/about';
import New from '../../component/new';
import Whats from '../../component/whats';
import Slide from '../../component/slide';

function Home() {
    return (
      <div >
        <Slider />
        <Divs/>
        <Product/>
        <About/>
        <New/>
        <Whats/>
        <Slide/>
      </div>
    );
  };
  
  export default Home;
