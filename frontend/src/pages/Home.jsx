import React from 'react';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Newletter from '../components/Newletter';
import New from '../components/New';

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Newletter />
      <New />
    </div>
  )
}

export default Home
