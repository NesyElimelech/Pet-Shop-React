import React from 'react';
// Custom components
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Banner from './components/DogAndCat/Banner.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Banner />
    </div>
  );
}

export default App;
