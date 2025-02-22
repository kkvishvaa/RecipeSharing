import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/JoyOfCooking.css';

const JoyOfCooking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="joy-of-cooking">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Unleash Your Inner Chef</h2>
        <p className="text-center mb-4" data-aos="fade-up">Transform your kitchen into a stage for culinary magic!</p>
        
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
            <div className="card">
              <div className="card-body">
                <h3>🌟 Turn Simple Ingredients Into Showstoppers</h3>
                <p>Got basics in the fridge? Watch them come to life with easy recipes, expert tips, and fresh ideas.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="card-body">
                <h3>💡 Discover Your Next Favorite Dish</h3>
                <p>Stuck on what to make? Let us guide you to mouthwatering dishes that match your mood and taste. Get ready to be wowed by flavors!</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="card">
              <div className="card-body">
                <h3>📸 Share Your Kitchen Triumphs</h3>
                <p>Show off your creations and inspire others! Snap, share, and let the applause roll in. Who knows? You could start the next food trend!</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="600">
            <div className="card">
              <div className="card-body">
                <h3>👨‍🍳 Join a Thriving Foodie Community</h3>
                <p>Every cook has a place at the table. From beginners to pros, find support, share recipes, or just enjoy the joy of cooking together.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="800">
            <div className="card">
              <div className="card-body">
                <h3>🔥 Master the Art of Seasoning</h3>
                <p>Learn how to balance flavors like a pro! From herbs to spices, elevate your dishes with the perfect seasoning combinations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoyOfCooking;
