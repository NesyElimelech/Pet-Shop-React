import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id='about' className='about'>
      <figure className='image'>
        <img src='/Assets/images/about_img.png' alt="dog's food plates" />
      </figure>
      <div className='content'>
        <h3>
          premium <span>pet food</span> manufacturer{' '}
        </h3>
        <p>
          here you can find our very best and premium pet food. <br /> we work
          with the most popular top rated brands, to make sure your pet gets
          only the best!
        </p>
        <a href='#' className='btn'>
          read more
        </a>
      </div>
    </section>
  );
};

export default About;
