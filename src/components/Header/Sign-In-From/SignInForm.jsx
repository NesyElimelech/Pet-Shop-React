import React from 'react';
import './SignInForm.css';
const SignInForm = ({ isActive }) => {
  return (
    <form action='' className={isActive ? `login-form active` : 'login-form'}>
      <h3>Sign in </h3>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Enter Your Email'
        className='box'
        autoComplete='true'
        required
      />
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Enter Your Password'
        className='box'
        autoComplete='current-password'
        required
      />
      <label htmlFor='remember-me' className='container'>
        <input type='checkbox' name='' id='remember-me' />
        <span className='checkmark'></span>
        Remember me
      </label>
      <button type='submit' className='btn'>
        {' '}
        Sign In{' '}
      </button>
      <div className='links'>
        <a href='#'>Forgot password?</a>
        <a href='#'>Sign Up</a>
      </div>
    </form>
  );
};

export default SignInForm;
