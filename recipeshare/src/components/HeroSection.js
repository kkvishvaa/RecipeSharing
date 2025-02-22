import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HeroSection.css';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

const navigate = useNavigate();
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src="/7963455-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container hero-content">
        <h1 data-aos="fade-down">Welcome to FlavorBridge</h1>
        <p className="lead" data-aos="fade-up" data-aos-delay="200">
          Where Every Recipe Tells a Story! Discover, Create & Share Culinary Magic
        </p>
        <button className="btn btn-outline-dark btn-lg" data-aos="fade-up" data-aos-delay="400"  onClick={() => navigate("/login")} >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
