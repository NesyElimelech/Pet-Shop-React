import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className='content'>
        <h3 className='headline'>
          <span>Hi</span> Welcome to our pet shop
        </h3>
        <a href='#' className='btn'>
          shop now
        </a>
      </div>
      <img
        src='../../Assets/images/bottom_wave.png'
        alt='waves'
        className='waves'
      />
    </section>
  );
};

export default Hero;
