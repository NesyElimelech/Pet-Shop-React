import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <div className='banner dog-food'>
        <div className='image'>
          <img src='/Assets/images/dog_food.png' alt='dog food' />
        </div>
        <div className='content'>
          <h3>
            <span>air dried</span> dog food
          </h3>
          <p>
            here you can find all kind of snacks for your dag. <br /> dental
            snacks, training snacks, and in all sizes.
          </p>
          <a href='#'>
            <img src='/Assets/images/shop_now_dog.png' alt='button' />
          </a>
        </div>
      </div>
      <div className='banner cat-food'>
        <div className='content'>
          <h3>
            <span>air dried</span> cat food
          </h3>
          <p>
            give your cat only the best, all natural ingredients. <br /> flavors
            like: salmon, tuna and lamb.
          </p>
          <a href='#'>
            <img src='/Assets/images/shop_now_cat.png' alt='button' />
          </a>
        </div>
        <div className='image'>
          <img src='/Assets/images/cat_food.png' alt='cat food' />
        </div>
      </div>
    </>
  );
};

export default Banner;
