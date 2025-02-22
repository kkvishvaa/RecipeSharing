import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Subscribe.css';

const SubscriptionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="subscription-section" data-aos="zoom-in">
      <h3 data-aos="fade-up">Get Exclusive Recipes & Cooking Tips in Your Inbox!</h3>
      <p data-aos="fade-up" data-aos-delay="200">Subscribe to our newsletter for weekly inspiration and culinary secrets.</p>
      <div className="subscription-form" data-aos="fade-up" data-aos-delay="400">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default SubscriptionSection;
