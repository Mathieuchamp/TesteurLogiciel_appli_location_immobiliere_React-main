import React from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner/index'
import Logementscards from '../components/Logementscards/index'
import Footer from '../components/Footer/index'
import Children from'../components/Children/Children'

function Home() {
  return (
    <div>
      <Children>
      <Navbar />
      <Banner />
      <Logementscards />
      </Children>
      <Footer />
    </div>
  );
}

export default Home

