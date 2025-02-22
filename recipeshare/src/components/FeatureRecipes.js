import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/FeaturedRecipes.css';

const FeaturedRecipes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="featured-recipes">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Why Join Us?</h2>
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <h3>🍕 Endless Recipe Inspirations</h3>
            <p>Explore thousands of tried-and-tested recipes shared by food enthusiasts like you. Whether you crave comfort food, exotic dishes, or healthy meals, you'll find them all here.</p>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3>🔹 Easy-to-Follow Recipes</h3>
            <p>Say goodbye to complicated instructions! Our step-by-step guides make cooking easier and more enjoyable for everyone.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <h3>🔹 Share Your Culinary Creations</h3>
            <p>Upload your recipes, add personal tips, and inspire others with your cooking expertise.</p>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3>🔹 Personalized Experience</h3>
            <p>Get recommendations based on your taste, save your favorites, and create custom cookbooks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
