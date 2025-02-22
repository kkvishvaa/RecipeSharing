import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedRecipes from '../components/FeatureRecipes';
import JoyOfCooking from '../components/JoyOfCooking';
import SubscriptionSection from '../components/Subscribe';
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <FeaturedRecipes />
        <JoyOfCooking />
        <SubscriptionSection />
        <Footer />
      </>
    );
  }
  
  export default Home;