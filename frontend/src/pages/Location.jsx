import React from "react";
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel/index'
import Footer from '../components/Footer/index'
import Children from'../components/Children/Children'


function Location() {
    return (
      <div>
        <Children>
        <Navbar />
        <Carousel/>
        <div className="about">
         <p>Collapse</p>
        </div>
        </Children>
        <Footer />
      </div>
    );
  }

export default Location