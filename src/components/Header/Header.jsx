import React, { useState, useEffect } from 'react';
import SignInForm from './Sign-In-From/SignInForm';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faUser,
  faBarsStaggered,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    if (isActive) setIsClicked(false);
    if (isClicked) setIsActive(false);
  }, [isActive, isClicked]);

  return (
    <header id='header' className='header'>
      <div className='logo'>
        <FontAwesomeIcon icon={faPaw} className='logo-icon' />
        <a href='#'>shop</a>
      </div>

      <nav className={isClicked ? 'navbar expand' : 'navbar'}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#shop'>Shop</a>
        <a href='#services'>Services</a>
        <a href='#plan'>Plan</a>
        <a href='#contact'>Contact</a>
      </nav>

      <div className='icons'>
        <FontAwesomeIcon
          className='icons-icon'
          id='menu-btn'
          icon={faBarsStaggered}
          onClick={toggleNavbar}
        />
        <FontAwesomeIcon className='icons-icon' icon={faShoppingCart} />
        <FontAwesomeIcon
          className='icons-icon'
          icon={faUser}
          onClick={toggleForm}
        />
      </div>

      <SignInForm isActive={isActive} />
    </header>
  );
};

export default Header;
