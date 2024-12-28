import React from 'react'
import './Hero.css';

function Hero() {
    return (
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to Moto Coffee Shop</h1>
          <p>Your daily dose of adrenaline and caffeine.</p>
          <a href="#menu">Explore Our Menu</a>
        </div>
      </section>
    );
  }

  export default Hero;